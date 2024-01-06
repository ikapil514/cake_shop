import { Button } from "@mui/material";
import "./SellerLanding.css";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function SellerLandingPage() {
  function handleLogInBtn() {}
  return (
    <div className="div1">
      <div className="bigImage">
        <div className="content-onImage-text">
          <h2 className="textbox1">
            Partner with Us - India's <br />
            biggest cake delivery app
          </h2>
          <p className="uppercase">limited time offer</p>
          <h2 className="textbox2">
            <span className="text-pink">
              Register at 0% commision <br />
            </span>
            for the first 30 days
          </h2>
          <p>&#x2022; benifit worth &#8377;15000</p>
        </div>
        <div className="content-onImage-button">
          <div className="logo"></div>
          <div className="content-onImage-btn-text">
            <h2 className="textbox2">Want to Join Cakery ? Let's</h2>
            <Button variant="contained">Sign Up</Button>
            <button className="login-btn" onClick={handleLogInBtn}>
              I have already an Account !
            </button>
          </div>
        </div>
      </div>
      <div className="three-images">
        <div className="image-one">
          <div className="icon1"></div>
          <div className="image-with-text">Increase your revenue</div>
        </div>
        <div className="image-two">
          <div className="icon2"></div>
          <div className="image-with-text">Large customer base</div>
        </div>
        <div className="image-three">
          <div className="icon3"></div>
          <div className="image-with-text">Increase your brand visibility</div>
        </div>
      </div>
      <div className="easy-steps">
        <div className="headline-text">Get started in 3 easy steps</div>
        <div className="three-steps">
          <div className="step1">
            <AddBusinessIcon className="stepicons" />
            <h4 className="step-text">Sign Up</h4>
            <h4 className="mini-text">
              Start with providing your and bakery details
            </h4>
          </div>
          <div className="step2">
            <TaskAltIcon className="stepicons" />
            <h4 className="step-text">Set Up</h4>
            <h4 className="mini-text">Create your shop profile</h4>
          </div>
          <div className="step3">
            <LocalMallIcon className="stepicons" />
            <h4 className="step-text">Sell</h4>
            <h4 className="mini-text">Go live and start getting orders</h4>
          </div>
        </div>
      </div>
      <div className="review-box">
        <div className="review-text">
          <div className="huge-text">
            “Three words - clean, swift and consistent! This sums up Swiggy's
            service offering.”
          </div>
          <div className="icontext">
            <div className="icon-review"></div>
            <div className="icon-text">
              Mitali Sahani, Owner <br />
              The Bombaykery, Gurugram.
            </div>
          </div>
        </div>
        <div className="review-image"></div>
      </div>
      <div className="services">
        <div className="headline-service">Get services that helps you grow</div>
        <div className="four-service">
          <div className="service1-image1">
            <div className="service1">
              <div className="head-service-txt">
                <div>
                  <QueryStatsIcon className="stepicons" />
                </div>
                Track Business
                <p className="service-text">
                  Track sales, customers & growth levers directly from your
                  phone
                </p>
              </div>
            </div>
            <div className="phone-image track-img"></div>
          </div>
          <div className="service1-image1">
            <div className="service1">
              <div className="head-service-txt">
                <div>
                  <ThumbsUpDownIcon className="stepicons" />
                </div>
                Customer Ratings
                <p className="service-text">
                  Stay on top of your customer feedback and improve your menu
                  and services
                </p>
              </div>
            </div>
            <div className="phone-image rating-img"></div>
          </div>
          <div className="service1-image1">
            <div className="service1">
              <div className="head-service-txt">
                <div>
                  <CurrencyRupeeIcon className="stepicons" />
                </div>
                Daily Payouts
                <p className="service-text">
                  Get Daily payments with order-level itemized breakdowns
                </p>
              </div>
            </div>
            <div className="phone-image daily-img"></div>
          </div>
          <div className="service1-image1">
            <div className="service1">
              <div className="head-service-txt">
                <div>
                  <SupportAgentIcon className="stepicons" />
                </div>
                24X7 Assistance
                <p className="service-text">
                  Get expert assistance of all your doubts and issues with our
                  partner support program
                </p>
              </div>
            </div>
            <div className="phone-image assist-img"></div>
          </div>
        </div>
      </div>
      <div className="text_and_btn">
        <div className="txt">
          Let's us become your Cakery Partner Today
          <Button variant="contained" size="medium">
            Get Started
          </Button>
        </div>
      </div>
      <div className="imgtxt-box">
        <div className="img1-text1">
          <div className="bg-img quality"></div>
          <div className="img_txt1">
            <p className="smalltxt uppercase tracking-widest">Quality</p>
            <h2 className="bgtxt">Packaging and Raw Materials</h2>
            <p className="smalltxt">
              Get high quality packaging and fresh ingredient supply with free
              next day delivery
            </p>
          </div>
        </div>
        <div className="img1-text1">
          <div className="bg-img growth"></div>
          <div className="img_txt1">
            <p className="smalltxt uppercase tracking-widest">premium</p>
            <h2 className="bgtxt">Growth Tools</h2>
            <p className="smalltxt">
              Boost your sales and brand with our insights, growth packs and
              discounting tools
            </p>
          </div>
        </div>
      </div>
      <div className="question-box">
        <div className="question-headline">Questions ?</div>
        <div className="all-question">
          <div className="question">
            <div className="q1">
              What are the mandatory documents needed to list my restaurant on
              Cakery?
              <div className="ans">
                <h2>&#x2022; Copies of the below documents are mandatory</h2>
                <h2>&#x2022; FSSAI Licence</h2>
                <h2>&#x2022; Pan Card</h2>
                <h2>&#x2022; GSTIN Certificate</h2>
                <h2>&#x2022; Cancelled Cheque OR bank Passbook</h2>
                <h2>&#x2022; Menu</h2>
              </div>
            </div>
          </div>
          <div className="question">
            <div className="q1">
              What is this one time Onboarding fees? Do I have to pay for it
              while registering?
              <div className="ans">
                <h2>
                  This is a one-time nominal fee of INR 999 (Exclusive of GST)
                  charged towards the system & admin costs incurred during the
                  onboarding process. A fixed part of this one-time fee i.e.,
                  INR 499 (Exclusive of GST), will be deducted upfront during
                  the onboarding process. The residual INR 500 (Exclusive of
                  GST), will be deducted from the daily payouts after you start
                  receiving your orders from Cakery.
                </h2>
              </div>
            </div>
          </div>
          <div className="more-question mt-9 flex">
            <div className="mr-9 text-base font-normal">More Question.?</div>
            <div>
              <button className="btn-support">See Partner Support</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-box">
        <div className="foot1">
          <div className="company">
            <h2 className="foot-head">Company</h2>
            <button>About Us</button>
            <button>Team</button>
            <button>Career</button>
            <button>Cakery Blog</button>
          </div>
          <div className="contact">
            <h2 className="foot-head">Contact</h2>
            <h2>8560051433</h2>
            <button>HElp & Support</button>
            <button>Partner with Us</button>
          </div>
        </div>
        <div className="foot2">
          <div className="foot-logo"></div>
          <h2>&#169; 2023 Cakery</h2>
          <div className="social-btn">
            <button>
              <InstagramIcon />
            </button>
            <button>
              <FacebookIcon />
            </button>
            <button>
              <TwitterIcon />
            </button>
            <button>
              <PinterestIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
