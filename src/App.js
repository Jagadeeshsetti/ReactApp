import Accordion from 'react-bootstrap/Accordion';
import List from '../list/list';
import Heading1 from '../headings/headings';
import Image from '../image/image';

function AccordionComponent () {
    const ipiTeams = [{
      teamName:"CSK",
      player:["Rutguraj","Rachin","Rahene","Dubey","Dhoni","Jadeja","Chahar","Pathirana","Santnar","Pandya"]
    },
  {  
   teamName:"RCB",
    player:["Kohli","Maxwal","Faf","Siraj","Lomron","Karthik","Jacks","Patidar","Green","Dayal"]
  },
  {  
    teamName:"KKR",
     player:["Iyer","Rinku","Salt","Starc","Narine","Russell","Rana","Gurbaz","Rahman","pandya"]
   }    
]
  return (
    <Accordion defaultActiveKey="0">

    {
      ipiTeams.map((eachiplTeams, index)=>{
        const{teamName, player}=eachiplTeams
        return(
          <>
            <Accordion.Item eventKey={index}>
              <Accordion.Header><b>{teamName}</b></Accordion.Header>
              <Accordion.Body>{player}</Accordion.Body>
            </Accordion.Item>
          </>
        )
      })
    }
    </Accordion>
  );
}

export default  AccordionComponent
