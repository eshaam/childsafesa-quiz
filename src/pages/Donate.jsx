import Button from 'react-bootstrap/Button';

const Donate = () => {
  return (
    <section className='section'>
      <div className="row">
        <div className="col-sm-12">
          <h2 className="display-5"> Empower Child Safety: Make a Secure Donation via Credit/Debit Card to ChildSafe South Africa</h2>
          <p className="lead">Join us in safeguarding the future of South Africa's children by making a secure and impactful donation through your credit/debit card to ChildSafe South Africa</p>
           <p>Your contribution directly supports our comprehensive programs and initiatives aimed at preventing accidents, abuse, and neglect among our nation's youth. By donating, you become a guardian of change, helping us provide safety education, support services, and advocacy to vulnerable children and their families. Every rand you contribute plays a crucial role in creating a safer and brighter future for the young ones in our communities. 
            Join hands with ChildSafe South Africa today – your generosity can make all the difference. Click below to donate securely and be a part of this vital mission.</p>

            <Button variant="primary" size="lg">
              Donate via PayFast
            </Button>
        </div>
      </div>

    </section>
  );
};
export default Donate;