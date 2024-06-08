import Accordion from 'react-bootstrap/Accordion';
import ListComponent from '../list/list';
import ImageComponent from '../image/image';

function AccordionComponent () {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          {
            [{name:"csk"},{name:"kkr"},{name:"rcb"}].map((eachTeam)=>{
              return(
               <>
                <ListComponent/>
                <ImageComponent/>
               </>
              )
            })
          }
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         <ImageComponent/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent;