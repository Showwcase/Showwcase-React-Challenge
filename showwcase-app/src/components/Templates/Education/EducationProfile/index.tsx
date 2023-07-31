import EducationProfileStyle from 'src/components/Templates/Education/EducationProfile/EducationProfile.styled';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { useGlobalContext } from 'src/context/store';
import { Education } from 'src/utils/types';

export default function EducationProfile() {
  const {menu_class} = useGlobalContext();

  const [selectedItem, setSelectedItem] = useLocalStorage('selectedItem', '');
  const [educationData] = useLocalStorage('EducationData', []);
  const [data, setData] = useState<Education[]>([]);
  const [dataSelected, setDataSelected] = useState<Education>({} as Education);

  const handleSelectedItem = (itemName:string) => {
    setSelectedItem(itemName);
  }

  useEffect(() => {
    if (selectedItem) {
      const ada = educationData.find((item:Education) => item.school === selectedItem);
      setSelectedItem(selectedItem);
      setDataSelected(ada);
    } else {
      setSelectedItem(data[0]?.school);
    }
  }, [selectedItem])

  useEffect(() => {
    if (educationData) {
      setData(educationData);
    }
  }, [educationData])

  function sidePanel() {
    return (
      <>
        <ul>
          {data.map((item, idx) => {
            return (
              <li
                key={idx+1}
                className={item.school === selectedItem ? 'active' : ''} 
                onClick={() => handleSelectedItem(item.school)}
              >
                {item.school}
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  return (
    <EducationProfileStyle>
      { data.length > 0 ?
        <>
          <div className={menu_class}>
            {sidePanel()}
          </div>
          <div className='side-panel'>
            {sidePanel()}
          </div>

          <div className='education-detail'>
            <h3>{dataSelected.degree} @ {dataSelected.school}</h3>
            <p>{dataSelected.startMonthDate?.name} {dataSelected.startYearDate?.name} - {dataSelected.endMonthDate?.name} {dataSelected.endYearDate?.name}</p>
            <pre>{dataSelected.description}</pre>
          </div>
        </> : 
        <div className='empty-data'>Data is empty! Please add new data</div>
      }
    </EducationProfileStyle>
  )
}
