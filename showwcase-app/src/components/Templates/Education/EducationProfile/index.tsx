import EducationProfileStyle from 'src/components/Templates/Education/EducationProfile/EducationProfile.styled';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

const itemData = [
  {
    web_page: "http://www.middlebury.edu/",
    country: "USA",
    domain: "middlebury.edu",
    name: "Middlebury College TEST"
  },
  {
    web_page: "http://www.mga.edu/",
    country: "USA",
    domain: "mga.edu",
    name: "Middle Georgia State College TEST"
  },
]

export default function EducationProfile() {
  const [selectedItem, setSelectedItem] = useState('');
  const [localStorage, setlocalStorage] = useLocalStorage('selectedItem', selectedItem);

  const handleSelectedItem = (itemName:string) => {
    setlocalStorage(itemName)
  }

  useEffect(() => {
    if (localStorage) {
      setSelectedItem(localStorage)
    } else {
      setSelectedItem(itemData[0].name)
    }
  }, [localStorage])

  return (
    <EducationProfileStyle>
      <div className='side-panel'>
        <ul>
          {itemData.map((item, idx) => {
            return (
              <li
                key={idx+1}
                className={item.name === selectedItem ? 'active' : ''} 
                onClick={() => handleSelectedItem(item.name)}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='education-detail'>
        <h3>Graduate Computer Science @ Showcase Univeristy</h3>
        <p>August 2019 - Present</p>
        <ul>
          <li>"Not all those who wonder are lost"</li>
          <li>"Not all those who wonder are lost"</li>
          <li>"Not all those who wonder are lost"</li>
          <li>"Not all those who wonder are lost"</li>
        </ul>
      </div>
    </EducationProfileStyle>
  )
}
