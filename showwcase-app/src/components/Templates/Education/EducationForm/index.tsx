import FormStyle from 'src/components/Templates/Education/EducationForm/EducationForm.styled';
import Button from 'src/components/UI/Button';
import Input from 'src/components/UI/Input';
import TextArea from 'src/components/UI/TextArea';
import Dropdown from 'src/components/UI/Dropdown';
import useFetch from 'src/hooks/useFetch';
import { useRouter } from "next/router";
import { Months } from "src/utils/data";
import { getYears } from "src/utils/functions";
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { useGlobalContext } from 'src/context/store';

export default function EducationForm() {
  const router = useRouter();

  const {setIsModalOpen, data, setData} = useGlobalContext();
  const [educationData, setEducationData] = useLocalStorage("EducationData", []);

  const education = useFetch(data.school);

  const handleChange = (e:any) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  const validateSubmit = () => {
    return data.school == '' || data.degree == '';
  }

  const handleSubmit = () => {
    const updatedData = [data, ...educationData];
    updatedData.sort((a: any, b: any) => b.id - a.id); //descending order of most recent

    setEducationData(updatedData);
    setIsModalOpen(false);
    router.reload();
  }

  return (
    <FormStyle>
      <div className="modal-body">
        <Input
          type="text"
          placeholder="Ex: Indonesia University"
          name="school"
          label='School'
          value={data.school}
          onChange={(e) => handleChange(e)}
          isAutocomplete
          isLoading={education.loading}
          autocompleteInput={data} //need add this value if using autocomplete
          setAutocompleteInput={setData} //need add this value if using autocomplete
          options={education.data} //need add this value if using autocomplete
        />
        <Input
          type="text"
          placeholder="Ex: Bachelor's"
          name="degree"
          label='Degree'
          value={data.degree}
          onChange={(e) => handleChange(e)}
        />

        <div className='dropdown-wrapper'>
          <div className='dropdown-box'>
            <label>Start</label>
            <div className='dropdown-content'>
              <Dropdown
                options={Months}
                value={data.startMonthDate}
                onChange={e => setData({...data, startMonthDate: e})} 
              />
              <Dropdown
                options={getYears('start')} 
                value={data.startYearDate} 
                onChange={e => setData({...data, startYearDate: e})} 
              />
            </div>
          </div>

          <div className='dropdown-box'>
            <label>End</label>
            <div className='dropdown-content'>
              <Dropdown
                options={Months}
                value={data.endMonthDate}
                onChange={e => setData({...data, endMonthDate: e})} 
              />
              <Dropdown
                options={getYears('expected')} 
                value={data.endYearDate} 
                onChange={e => setData({...data, endYearDate: e})} 
              />
            </div>
          </div>
        </div>

        <Input
          type="text"
          name="grade"
          label='Grade'
          value={data.grade}
          onChange={(e) => handleChange(e)}
        />
        
        <TextArea
          placeholder="Add some description"
          name="description"
          label='Description'
          value={data.description}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="modal-footer">
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={validateSubmit()}
        >
          Save
        </Button>
      </div>
    </FormStyle>
  )
}