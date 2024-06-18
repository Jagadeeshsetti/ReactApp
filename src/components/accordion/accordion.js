import Accordion from 'react-bootstrap/Accordion';


function AccordionComponent () {

  const iplteams = [
    {
    teamName:"CSK",
    teamPlayers:["Ruthuraj","Rachin","Rahena","Mitchal","Dubay","Jadeja","Dhoni","Deepak","Thekshna","Pathirana","Ali"]
  },
  {
    teamName:"RCB",
    teamPlayers:["Kohli","Faf","Maxwel","Pathidhar","Dhayal","Jacks","","Siraj","Karthik","Joshaf","Green"]
  },
  {
    teamName:"KKR",
    teamPlayers:["Iyer","Rinku","Salt","Starc","Narine","Rana","Russell","Panday","Varun","Roy","Sakariya"]
  },
]
 return(
  
  <>
  <Accordion defaultActiveKey="0">
  {
    iplteams.map((eachTeam, index)=>{
      const {teamName, teamPlayers}=eachTeam
      return(
        <>
        <Accordion.Item eventKey={index}>
        <Accordion.Header>{teamName}</Accordion.Header>
        <Accordion.Body>{teamPlayers}</Accordion.Body>
      </Accordion.Item>
        </>
      )
    }
    )
    }
  
  </Accordion>
  </>
 )
            
}

export default AccordionComponent;