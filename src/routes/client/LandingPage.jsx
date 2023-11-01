import { Link } from "react-router-dom";

const LandingPage = () =>
{
    return(
        <div className="container-fluid p-0">
            <nav className="navbar px-5 border-bottom" style={{backgroundColor: "#eeede9",}}>
                <div className="container-fluid">
                    <div className="d-flex gap-2 flex-row align-items-center">
                        <img src="/bee.png" height="30px" />
                        <Link className="navbar-brand h1" style={{color: "#f4d12f", fontSize: "30px"}} to="/">hive</Link>
                    </div>
                    <div className="d-flex flex-row" style={{gap: "30px"}}>
                        <Link className="nav-link" to="/listings">listings</Link>
                        <Link className="nav-link" to="/admin/register">organization login</Link>
                    </div>
                </div>
            </nav>

            <div className="d-flex justify-content-between align-items-center" style={{paddingLeft: "300px",paddingRight: "300px",height: "90vh"}}>
                <div>
                    <h3>play hard,</h3>
                    <h1>work hard.</h1>
                    <p style={{marginTop: "30px"}}>Hive is a tool for Houston high schoolers to find internship, research, and volenteer opportunites outside of the classroom</p>
                    <Link className="btn" style={{backgroundColor: "#f4d12f", color: "white"}} to="/listings">View Listings</Link>
                </div>
                <img src="landing-page-img-1.jpg" height="250px" className="rounded"/>
            </div>

            <div className="d-flex justify-content-between align-items-center" style={{paddingLeft: "250px",paddingRight: "250px",height: "100vh", backgroundColor: "#988b6b"}}>
                <img src="landing-page-img-2.jpg" height="300px" className="rounded"/>
                <div style={{margin: "30px"}}>
                    <h3 style={{color: "#eeede9"}}>real companies,</h3>
                    <h1 style={{color: "#eeede9"}}>real impact.</h1>
                    <p style={{ color: "#eeede9"}}>Hive makes it easy to leverage your education and personal projects to gain experience</p>
                    <Link className="btn" style={{backgroundColor: "#f4d12f", color: "white"}} to="/listings">View Listings</Link>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center" style={{paddingLeft: "250px",paddingRight: "250px",height: "100vh"}}>
                
                <div style={{margin: "30px"}}>
                    <h1 style={{}}>invest in the future.</h1>
                    <p style={{}}>With the advent of the internet, high school students are gaining knowledge and skills comparable to undergrads in vairous fields. Hive lets your organization take advantage of this large untapped labour market. </p>
                    <Link className="btn" style={{backgroundColor: "#f4d12f", color: "white"}} to="/admin/register">Sign Up</Link>
                </div>
                <img src="/landing-page-img-3.jpg" height="300px" className="rounded"/>
            </div>
            <footer className="text-center p-3">made with ❤️ by femi</footer>
        </div>
    );
};

export default LandingPage;