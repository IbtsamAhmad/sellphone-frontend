import logo from "./assets/images/logo.svg";
import "antd/dist/antd.css";
import { Row, Col, Image, Typography, Collapse, Space } from "antd";
import PrivacyBanner from "./assets/images/privacy-banner-img.png";
import UserIcon from "./assets/images/use-privacy-icon.png";
import LocatedIcon from "./assets/images/located-pointer.png";
import PersonalInfoIcon from "./assets/images/personal-information.png";
// import AddIcon from "./assets/images//add-circle-fill.png";
// import MinusIcon from "./assets/images/minus-circle-icon.png";
import ArrowUp from "./assets/images/arrow-up.svg";
import ArrowDown from "./assets/images/arrow-down.svg";
import NonPersonalInfo from "./assets/images/non-personal.png";
import QestionCircle from "./assets/images/question-circle.png";
import ShareIcon from "./assets/images/share-icon.png";
import CookieStatement from "./assets/images/cookie-statement.png";
import AccountDeletion from "./assets/images/account-deletion.png";
import OptOt from "./assets/images/opt-out.png";
import Security from "./assets/images/security.png";
import PrivacyPolicyIcon from "./assets/images/privacy-policy.png";
import NeedContact from "./assets/images/need-contact.png";

import Facebook from "./assets/images/facebook.svg";
import Twitter from "./assets/images/twitter.svg";
import Snapchat from "./assets/images/Snapchat.png";
import Instagram from "./assets/images/instagram.svg";
import Linkedin from "./assets/images/linkedin.svg";
import Youtube from "./assets/images/youtube.svg";

const { Panel } = Collapse;

const { Title, Paragraph, Text, Link } = Typography;

function PrivacyPolicy() {
  return (
    <>
      <div className="privacy-wrap">
        <div className="contaier">
          <div className="logo-wrap">
            <Link href="/">
              <Image width={200} src={logo} preview={false} />
            </Link>
            <Space className="social-box privacy-socio" size={28}>
              <Link
                className="link"
                href="https://www.facebook.com/sellphoneapp"
                target="_blank"
              >
                <Image preview={false} size={20} src={Facebook}></Image>
              </Link>
              <Link
                className="link"
                target="_blank"
                href="http://twitter.com/SellPhoneapp"
              >
                <Image preview={false} src={Twitter}></Image>
              </Link>
              <Link
                className="link"
                target="_blank"
                href="https://t.snapchat.com/nlRoaPQM"
              >
                <Image
                  className="snap-chat"
                  preview={false}
                  size={10}
                  src={Snapchat}
                ></Image>
              </Link>

              <Link
                className="link"
                target="_blank"
                href="https://instagram.com/thesellphone/"
              >
                <Image preview={false} size={20} src={Instagram}></Image>
              </Link>
              <Link
                className="link"
                href="https://www.linkedin.com/company/sell-phone/"
                target="_blank"
              >
                <Image preview={false} size={18} src={Linkedin}></Image>
              </Link>
              <Link
                className="link"
                href="https://www.youtube.com/channel/UCgkRCB--vrXv8us7ZC16Tng"
                target="_blank"
              >
                <Image preview={false} size={21} src={Youtube}></Image>
              </Link>
            </Space>
          </div>

          <Row className="banner-wrap">
            <Col xl={14}>
              <Title className="banner-title" level="2">
                Privacy Policy of <span>Sell Phone</span>
              </Title>
              <Paragraph className="bnr-text mb-0">
                The privacy policy statement of Sell Phone discloses all the
                relevant information regarding the data handling of personal and
                non-personal information. We have also disclosed the rights of
                Sell Phone and rights of users. Sell Phone will always remain
                true to its commitment to uphold the privacy of its users. This
                statement of privacy protection of users is only applicable on
                the user’s information which will be collected and stored in our
                databases. Any change in our privacy policy will be updated at
                this URL and will be effective immediately. The user’s
                acceptance to our privacy policy will be assured through the
                user’s continuous use of our services either via application or
                website.
              </Paragraph>
            </Col>
            <Col xl={10} className="text-right">
              <Image src={PrivacyBanner} preview={false} />
            </Col>
          </Row>
          <Collapse
            accordion
            className="privacy-accordian"
            expandIconPosition="end"
            // defaultActiveKey={["1"]}
            expandIcon={({ isActive }) =>
              isActive ? (
                <Image src={ArrowUp} width={30} height={30} preview={false} />
              ) : (
                <Image src={ArrowDown} width={30} height={30} preview={false} />
              )
            }
          >
            <Panel
              header="User Privacy of Sell Phone"
              extra={
                <Image
                  className="message-icon"
                  src={UserIcon}
                  preview={false}
                />
              }
              key="1"
            >
              This user privacy statement of Sell Phone is applicable on the use
              of our website and all the related services of Sell Phone
              including the mobile apps and website access.
            </Panel>
            <Panel
              header="Where are we Located?"
              extra={
                <Image
                  className="message-icon"
                  src={LocatedIcon}
                  preview={false}
                />
              }
              key="2"
            >
              Sell Phone is a registered business and our full address is:
              <br /> 85 Sikander block, Allama Iqbal Town, Lahore, Pakistan.
            </Panel>
            <Panel
              header="Personal Information Collected by Sell Phone"
              extra={
                <Image
                  className="message-icon"
                  src={PersonalInfoIcon}
                  preview={false}
                />
              }
              key="3"
            >
              For providing you seamless services, Sell Phone holds the right to
              collect your personal information which includes but is not
              limited to user ID, contact number, postal address, email address,
              age, gender and other information to improve user experience. The
              personally identifiable information of users is only collected
              when they give us their consent through registration form. The
              information provided by the user through their consent will be
              transferred and stored in our servers and can be used later as per
              the business needs.
            </Panel>
            <Panel
              header="Non-Personal Information Collected by Sell Phone"
              extra={
                <Image
                  className="message-icon"
                  src={NonPersonalInfo}
                  preview={false}
                />
              }
              key="4"
            >
              We also intend to collect non-personal information like usage
              patterns of websites and identification details of mobile devices
              and other gadgets used to access our website or portal. The usage
              pattern of website users include what a user searches for, what
              type of content is being looked for, the browsing history of the
              user, different features used by the user, frequency of visiting
              website, actions taken on the website and average time spent on
              the website/application. Identification details of devices used to
              access our website may include but not limited to the IP address,
              operating systems, type of device, device ID, Internet, browsing
              history, previous URL visited and real time geographical location
              of devices.
            </Panel>
            <Panel
              header="Why Do We Collect User Information?"
              extra={
                <Image
                  className="message-icon"
                  src={QestionCircle}
                  preview={false}
                />
              }
              key="5"
            >
              <Paragraph className="message-txt mb-0">
                <ul>
                  <li>
                    The user’s information collected through the platform of
                    Sell Phone is intended solely for the purpose of providing
                    our services in the most effective and seamless way and
                    enhancing the user experience.
                  </li>
                  <li>
                    Another intended use of collected information is to show
                    classified ads to our users on the basis of previous search
                    history and location of users.
                  </li>
                  <li>
                    Sell Phone will not be liable for any kind of transaction
                    which has been made or facilitated by our website. The buyer
                    and seller will be wholly responsible for the transaction
                    made.
                  </li>
                  <li>
                    The collected information will be used to provide excellent
                    customer services and address the concerns and queries of
                    customers. Also, to inform them about the customized and
                    personalized products and services as per the needs of web
                    users.
                  </li>
                  <li>
                    We will use the information for marketing purposes too i.e.
                    to inform customers about marketing campaigns, conduct
                    marketing research and will also perform other marketing
                    related activities.
                  </li>
                  <li>
                    Data analytical techniques will also be performed on the
                    collected data to obtain deep insights about the data which
                    will enable us to provide enhanced user experience. However,
                    insights and statistics will be general and provide a wide
                    picture of our users.
                  </li>
                  <li>
                    We will also keep our subscribers updated about any change
                    in business policies including the privacy policies.
                  </li>
                  <li>
                    We will use the information to provide security and
                    protection measures and maintain the integrity of our
                    business.
                  </li>
                  <li>
                    We will perform our legal and regulatory obligations that
                    have been already established between us while subscribing.
                  </li>
                  <li>
                    On the basis of the information, we will show personalized
                    ads to our users that match their interests and preferences.
                  </li>
                  <li>
                    Data will also be used to measure the effectiveness of
                    advertisement campaigns, usage patterns of the website, apps
                    and other related services of users.
                  </li>
                  <li>
                    Information will also be used to identify any issue in the
                    server and administer the faults or bugs in the website and
                    application.{" "}
                  </li>
                </ul>
                Hence, the provided information will be used for above mentioned
                uses but they are not limited to these only. We may use
                information for other uses with your consent.
              </Paragraph>
            </Panel>
            <Panel
              header="To Whom User’s Information Can be Shared?"
              extra={
                <Image
                  className="message-icon"
                  src={ShareIcon}
                  preview={false}
                />
              }
              key="6"
            >
              It is important to disclose that the personal information of users
              can be shared with law enforcement agencies, governmental
              institutions, regulatory authorities or any other legal
              institution to conform to the legal obligations. We also hold the
              right to use your information for verifying your identity by
              sharing with law enforcement agencies or governmental
              institutions. The user’s information can also be used for
              investigating and detecting purposes, if required in situations of
              fraudulent activities, prosecution, theft and other illegal
              activities.
            </Panel>
            <Panel
              header="Statement about Cookies"
              extra={
                <Image
                  className="message-icon"
                  src={CookieStatement}
                  preview={false}
                />
              }
              key="7"
            >
              <p>
                Another important disclosure that our users must be aware of is
                that we might drop cookies on your computer when you use our
                website. Cookies are files stored in your hard drive whose
                purpose is to help our users easily navigate the website and
                showing them the only content according to their interests and
                preferences. Cookies do not breach your privacy or steal any
                information from your computer.
              </p>
              <p>
                External advertisements companies will also be allowed to
                display ads on our website which may contain cookies. Cookies
                used by advertising companies will not be under our control and
                hence, we will not be liable for the information collected by
                the advertising companies.{" "}
              </p>
            </Panel>
            <Panel
              header="Account Deletion"
              extra={
                <Image
                  className="message-icon"
                  src={AccountDeletion}
                  preview={false}
                />
              }
              key="8"
            >
              <Paragraph className="message-txt mb-0">
                If the user sends us a verifiable consumer request to delete its
                account, we are liable to delete the account and all the related
                personal information. We will also direct our partners and
                subsidiary companies to delete your personal information.
                However, Sell Phone will not be liable for the personal data
                collected by our employees under their job requirements or for
                business purposes. Verifiable consumer requests can only be
                processed after thorough verification of the account holder. To
                process the account deletion request, you may contact us through
                our Contact Us Page.
              </Paragraph>
            </Panel>
            <Panel
              header="Right to Opt-Out"
              extra={
                <Image className="message-icon" src={OptOt} preview={false} />
              }
              key="9"
            >
              <Paragraph className="message-txt mb-0">
                You have the right to opt out from your consent of receiving
                information from us and our partners and we will stop sending
                you information. You can exercise your right to opt out through
                following options mentioned below:
                <ul>
                  <li>
                    You can hit the unsubscribe button which will be given in
                    the email messages sent from our side.
                  </li>
                  <li>
                    Our business will only process that data which has been
                    provided to us with the consent of users and on the basis of
                    other lawful bases including contract and legitimate
                    interests. You have the right to decline your consent to use
                    information at any time but where your information is used
                    under legitimate interests, you only have the right to
                    object.
                  </li>
                </ul>
              </Paragraph>
            </Panel>
            <Panel
              header="Security"
              extra={
                <Image
                  className="message-icon"
                  src={Security}
                  preview={false}
                />
              }
              key="10"
            >
              <Paragraph className="message-txt mb-0">
                Our website has ensured the security of information entrusted to
                us by the users. We have taken the security measures as per the
                industry standards to make sure that information collected in
                our database is highly protected and is not being misused or
                altered. However, it is a known fact that in the present era of
                digitalization, 100% security cannot be ensured. Therefore, in
                case of any privacy loss or misuse of information due to any
                unwanted or inevitable incident, you shall acknowledge that Sell
                Phone will not be responsible. The information provided with
                your consent will be at your own risk. The inevitable incidents
                might include but are not limited to explosion, government
                interference, Unauthorized access to databases, sabotage,
                encryption, breach of security, hacking, conflicts and natural
                calamities.
              </Paragraph>
            </Panel>
            <Panel
              header="Right to Change Privacy Policy"
              extra={
                <Image
                  className="message-icon"
                  src={PrivacyPolicyIcon}
                  preview={false}
                />
              }
              key="11"
            >
              <Paragraph className="message-txt mb-0">
                Sell Phone reserves the right to update, modify or change the
                privacy policy at any time as per the business needs. We own the
                right to change the privacy policy without any prior notice.
                Hence, we suggest you keep yourself updated about our privacy
                policy. Your continued use of our website will be considered as
                your consent on our privacy policy.
              </Paragraph>
            </Panel>
            <Panel
              header="Need to Contact?"
              extra={
                <Image
                  className="message-icon"
                  src={NeedContact}
                  preview={false}
                />
              }
              key="12"
            >
              <Paragraph className="message-txt mb-0">
                If you have any concern, queries or grievances on our privacy
                policy, you can freely contact us through our contact page. Your
                concerns will be answered accordingly.
              </Paragraph>
            </Panel>
          </Collapse>
          <Paragraph className="privacy-text">
            © Copyrights Sell Phone 2022 | All Rights Reserved
             {/* | Terms of Use{" "} */}
          </Paragraph>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
