import FormStyle from 'src/components/Templates/Education/EducationForm/EducationForm.styled';
import Button from 'src/components/UI/Button';
import Input from 'src/components/UI/Input';
import TextArea from 'src/components/UI/TextArea';
import Dropdown from 'src/components/UI/Dropdown';
import useFetch from 'src/hooks/useFetch'
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { Months } from "src/utils/data"
import { getYears } from "src/utils/functions"
import { useGlobalContext } from 'src/Context/store';

export default function EducationForm() {
  const { setIsModalOpen, data, setData } = useGlobalContext();
  const [localStorage, setlocalStorage] = useLocalStorage('Data', {});

  const education = useFetch(data.school);

  const handleChange = (e:any) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  const handleSubmit = () => {
    setlocalStorage(data)
    setIsModalOpen(false)
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
                options={getYears('before')} 
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
                options={getYears('after')} 
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
        >
          Save
        </Button>
      </div>
    </FormStyle>
  )
}