import { useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import useSWR from "swr";
import useDebounce from "./useDebounce";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    height: "50%",
    width: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 100,
  },
};

const selectCustomStyles = {
  container: (provided) => ({
    ...provided,
    width: 180,
  }),
};

const EducationModal = ({ isModalOpen, changeModalState, onModalSubmit }) => {
  const [typedInputValue, setTypedInputValue] = useState("");
  const [selectedInstitue, setSelectedInstitute] = useState();
  const [selectOptions, setSelectOptions] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [achivements, setAchivements] = useState([]);
  const [achivementInputValue, setAchivementValue] = useState<string>();
  const [degree, setDegree] = useState();

  const fetcher = (...args) =>
    fetch(...args).then((res) => {
      return res.json();
    });

  const debouncedSearch = useDebounce(typedInputValue, 500);
  const { data } = useSWR(
    () =>
      debouncedSearch
        ? `http://universities.hipolabs.com/search?name=${debouncedSearch}`
        : null,
    fetcher
  );

  const onInstituteSelect = (value) => {
    setSelectedInstitute(value);
  };

  useEffect(() => {
    console.debug("data", data);
    if (data && data.length !== 0) {
      let labeledData = data.map((item) => {
        return { label: item.name, value: item.name };
      });
      setSelectOptions(labeledData);
    } else {
      setSelectOptions([]);
    }
  }, [data]);

  const onInstituteChange = (value: string) => {
    console.debug("value", value);
    setTypedInputValue(value);
  };

  const addAchievemnts = () => {
    let achievementList = [...achivements];
    achievementList.push(achivementInputValue);
    setAchivements(achievementList);
    setAchivementValue("");
  };

  const onEnterClick = (e) => {
    if (e.key === "Enter") {
      addAchievemnts();
    }
  };

  const removeAchivements = (index: number) => {
    let achievementList = [...achivements];
    achievementList.splice(index, 1);
    setAchivements(achievementList);
  };

  const onsubmit = () => {
    changeModalState();
    onModalSubmit();
  };
  return (
    <Modal
      isOpen={isModalOpen}
      style={customStyles}
      onRequestClose={changeModalState}
    >
      <div className="w-full space-y-4">
        <div className="flex justify-between">
          <label>Degree</label>
          <input
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="border"
          ></input>
        </div>
        <div className="flex justify-between">
          <label>Institution</label>
          <Select
            value={selectedInstitue}
            onInputChange={(value: any) => onInstituteChange(value)}
            options={selectOptions}
            onChange={onInstituteSelect}
            styles={selectCustomStyles}
          />
        </div>
        <div className="flex justify-between">
          <label>Start Date</label>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              customInput={<input className="border"></input>}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <label>End Date</label>
          <div>
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              customInput={<input className="border"></input>}
            />
          </div>
        </div>
        <div className="justify-end flex flex-col items-end">
          {achivements.map((item: string, index: number) => {
            return (
              <div key={index} className="space-x-1">
                <span>{item}</span>
                <span
                  onClick={() => removeAchivements(index)}
                  className="text-xs text-red-400 bg-red-200 rounded-full p-1 cursor-pointer"
                >
                  X
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between">
          <label>Achivements</label>

          <input
            value={achivementInputValue}
            onChange={(e) => setAchivementValue(e.target.value)}
            className="border"
            onKeyDown={onEnterClick}
          ></input>
        </div>
        <div>
          <button className="bg-blue-500" onClick={() => onsubmit()}>
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EducationModal;
