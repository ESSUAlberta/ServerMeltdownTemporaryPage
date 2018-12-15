import React from 'react';
import logo from "../logo.svg"
import InformativeTextBox from '../Components/InformativeTextBox';

export default class CareerFair extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <a href="/"><img alt="ESS Logo" src={logo} /></a>
                    <InformativeTextBox>
                        <h1>For Employers</h1>
                        The University of Alberta Engineering Students’ Society (ESS) is excited to invite your company to our 19th Annual ESS Career Fair on January 9 and 10, 2019. <br /><br />

                        Over the past 18 years, the student-organized ESS Career Fair has been an incredible success, thanks to the support of companies like yours. The companies that have attended annually have developed strong and meaningful relationships with the student body and the faculty. We are excited for you to visit our campus and connect with our talented students at this event.
                        <br /><br />

                        January 9 booths are officially sold out and January 10 booths are going fast! See the floor plans below to find out which booths are available.<br /><br />

                        <a href="http://bit.ly/ESSjan9">January 9th</a><br />
                        <a href="http://bit.ly/ESSjan10">January 10th</a><br /><br />

                        Click <a href={process.env.PUBLIC_URL + "/University%20of%20Alberta%20-%202019%20ESS%20Career%20Fair%20Invitation%20Package.pdf"}>here</a> to download the 2019 ESS Career Fair Invitation Package PDF document. This package has more information about our career fair as well as our engineering programs, Co-op Program, and the Engineering Employment Centre.

                        Are you a startup company? Contact us to find out what opportunities we have for you!

                        For more information and to register, please contact us at <a href="mailto:director.careerfair@ess.ualberta.ca">director.careerfair@ess.ualberta.ca</a>{"."}
                    </InformativeTextBox>
                    <InformativeTextBox>
                        <h1>For Students</h1>
                        The Engineering Students’ Society (ESS) of the University of Alberta invites you to participate in our 19th Annual Career Fair on January 9th & 10th from 10:00 AM to 3:00 PM in the ETLC Solarium.<br /> <br />

                        This event will host an abundance of employers and agencies promoting their summer jobs, internships, career opportunities and graduate school programs to all students and alumni. These employers hire Chemical, Civil, Computer, Electrical, Engineering Physics, Environmental, Materials, Mechanical, Mining and Petroleum engineering, as well as several sub-streams of engineering.<br /><br />

                        New to this year, by RSVPing on Eventbrite you will be provided with a coloured PRINTED name tag to wear at the Career Fair. This will help employers identify your discipline and make you stand-out from the crowd!<br />
                        Click <a href="https://www.facebook.com/events/211309043097189/">here</a> for our Facebook Event<br />
                        Click <a href="https://www.eventbrite.com/e/ualberta-19th-annual-ess-career-fair-registration-53259140523">here</a> for our Eventbrite Page<br /><br />

                        To be prepared for this event, attend an Engineering Employment Centre's "How to Wow at a Career Fair" workshop on January 7th at 5 PM or Jan 8th at 11 AM.<br />
                        There are limited spots available for the workshop, so register now at <a href="https://uab.ca/eec">uab.ca/eec</a>
                        <br /><br />

                        {false ? "Interested in volunteering for the 2019 ESS Career Fair? Fill out this form!" : null}

                        List of Registered Employers:
                        <br /><br />
                        <iframe style={{ width: "100%", height: "60vh" }} title="Career Fair Employers 2019" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSHvipD-fJNvsvWKC38hjh_pgbwSZl57sc03PJudji8gXkDUpkZJRKgGCzXhZ-zSWkLM7thRJL_WuIw/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

                    </InformativeTextBox>
                </div>
            </div>
        );
    }
}