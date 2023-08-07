import Accordion from 'react-bootstrap/Accordion';

const About = () => {
  return (
    <section className='section'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Mission and vision</Accordion.Header>
        <Accordion.Body>
          <p>We believe that every child has a right to grow and flourish in a safe environment without the threat of being hurt. </p>
          <p>ChildSafe is a campaign of the Child Accident Prevention Foundation of Southern Africa (CAPFSA) and Safe Kids Worldwide. We promote the optimal health and development of all children in South Africa. We aim to reduce and prevent intentional
             and unintentional injuries of all severity through research, education, environmental change and recommendations for legislation.</p>
          <p>We work in partnership with government, industry, non-governmental and community based organisations, community groups and individuals.</p>
          <h3>Our mission and vision</h3>
          <p>Our vision is to create a safer world for children.</p>
          <p>Our mission is guided by clear objectives:</p>\
          <ul>
            <li>To promote a general understanding of the nature, extent and cost of childhood injuries. </li>
            <li>To raise community awareness about childhood safety and injury prevention.</li>
            <li>To reduce the frequency, minimise the severity, or prevent the occurrence of childhood injuries. </li>
            <li>To serve as a resource centre to the community, providing meaningful information and resources regarding childhood injuries and their prevention. </li>
            <li>To build a scientific body of knowledge regarding childhood injuries and preventative methods. </li>
            <li>To foster community involvement as a basis for childhood accident and injury prevention services. </li>
            <li>To increase the levels of participation from all sectors of the community, including government and 
              private organisations, to develop and implement injury prevention measures.</li>
            <li>To lobby and motivate for standards and legislation regarding children’s products and safer environments. </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>History of CAPFSA</Accordion.Header>
        <Accordion.Body>
          <p>As a campaign of the Child Accident Prevention Foundation of Southern Africa (CAPFSA), ChildSafe saves lives and money and preserves human potential. 
            For 40 years, the Foundation has been pioneering, working quietly and consistently towards curbing childhood injuries.</p>
          <p>In 1978, Professor Sid Cywes was concerned about the number of child injures in South Africa. At the time, Prof. Cywes was Head of Paediatric Surgery at the Red Cross Children’s Hospital in Cape Town. He established the Child Safety Centre to undertake structured
             research on the causes and effects of accidents affecting children. The data gathered over the years has been used to devise safety education programmes to help reduce injuries.</p>
          <p>By 1987, it was clear that there was a need for the knowledge and skills acquired
               through the programme to be used on a regional and national basis. In April 1987, 
               CAPFSA was established to focus nationally on preventing children from needless injury and senseless deaths in accidents.
                The organisation developed various programmes to support that intention.</p>
          <p>CAFPSA is represented in its distinctive logo which signifies the balance between cautious controlled behaviour and normal adventurous childhood activities. 
            A child's life represents a balance between the natural abandon of childhood and essential controls that keep them safe. 
            When this balance is disturbed, the results can be tragic.</p>
          <p>In 2008, CAPFSA began to operate under a single name: ChildSafe South Africa. 
            The new name represents the organisation’s singular focus to make South Africa a safer country for children. 
            The name is clear in its intention and highlights our aim to reduce and prevent accidental deaths, injuries, 
            disabilities and suffering among children in South Africa.</p>
          <p>We are proud of some of our most significant achievements over the years, including:</p>
          <ul>
            <li>Establishment of a resource centre which is instrumental in the development 
              and implementation of child car restraint legislation, the firearms control bill and child abuse prevention.</li>
            <li>Initiation of an annual child accident prevention month. </li>
            <li>Development of the first Life Orientation Accident Prevention Resource Pack. </li>
            <li>Creation of the only paediatric injury database in the country</li>
            <li>Establishment of a satellite ChildSafe office in Gauteng</li>
            <li>Development of various educational resources including leaflets, posters and videos. </li>
            <li>Development of various training courses. </li>
            <li>Participation in numerous television and radio programmes and interviews.</li>
            <li>Featuring in print media coverage on child safety. </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
  );
};
export default About;