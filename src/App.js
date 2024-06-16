import linkedin from './static/images/linkedin-logo.png';
import github from './static/images/github-logo.png';
//import openai from './static/images/openai-logo.png';
import './App.css';
import { Helmet } from 'react-helmet';
import SkillsSection from './components/SkillsSection';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const lampLightbulb = document.getElementById('lamp-lightbulb');
    const lamp = document.getElementById('lamp');
    let isYellow = true;

    if (lamp && lampLightbulb) {
      lamp.addEventListener('click', function () {
        isYellow = !isYellow;
        lampLightbulb.style.fill = isYellow ? 'var(--yellow)' : 'grey';
      });
    }
  }, []);

  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link rel="stylesheet" href="workshop-animation.css" />
        <title>sadiefreisthler.com</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,600&family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="grid" id="grid">
        <div className="workshop-box">
          <div className="workshop">
            <svg width="85%" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="frame1">
              <g id="desk">
              <rect id="desk-top" x="9" y="86.501" width="232" height="7.73333"/>
              <rect id="desk-left" x="24.4667" y="94.2344" width="11.6" height="100.533"/>
              <rect id="desk-right" x="213.933" y="94.2344" width="11.6" height="100.533"/>
              <rect id="desk-bottom" x="36.0667" y="164.608" width="177.867" height="9.28"/>
              </g>
              <g id="laptop">
              <rect id="laptop-keyboard" x="104" y="82.1045" width="61" height="3.15517" rx="1.57759"/>
              <rect id="laptop-frame" x="109.259" y="49.501" width="50.4828" height="31.5517" rx="2"/>
              <rect id="laptop-screen" x="111.362" y="51.6045" width="46.2759" height="27.3448" rx="2"/>
              <path id="computer-text" d="M113.352 57V54.0909H113.705V55.3864H115.256V54.0909H115.608V57H115.256V55.6989H113.705V57H113.352ZM117.183 57.0455C116.972 57.0455 116.791 56.9991 116.638 56.9062C116.487 56.8125 116.37 56.6818 116.288 56.5142C116.206 56.3456 116.165 56.1496 116.165 55.9261C116.165 55.7027 116.206 55.5057 116.288 55.3352C116.37 55.1638 116.485 55.0303 116.631 54.9347C116.779 54.8381 116.951 54.7898 117.148 54.7898C117.262 54.7898 117.374 54.8087 117.485 54.8466C117.596 54.8845 117.697 54.946 117.788 55.0312C117.879 55.1155 117.951 55.2273 118.005 55.3665C118.059 55.5057 118.086 55.6771 118.086 55.8807V56.0227H116.404V55.733H117.745C117.745 55.6098 117.72 55.5 117.671 55.4034C117.623 55.3068 117.554 55.2306 117.464 55.1747C117.375 55.1188 117.27 55.0909 117.148 55.0909C117.015 55.0909 116.899 55.1241 116.802 55.1903C116.705 55.2557 116.631 55.3409 116.579 55.446C116.527 55.5511 116.501 55.6638 116.501 55.7841V55.9773C116.501 56.142 116.529 56.2817 116.586 56.3963C116.644 56.5099 116.724 56.5966 116.826 56.6562C116.928 56.715 117.047 56.7443 117.183 56.7443C117.271 56.7443 117.35 56.732 117.421 56.7074C117.493 56.6818 117.555 56.6439 117.607 56.5938C117.659 56.5426 117.7 56.4792 117.728 56.4034L118.052 56.4943C118.018 56.6042 117.96 56.7008 117.88 56.7841C117.799 56.8665 117.7 56.9309 117.582 56.9773C117.463 57.0227 117.33 57.0455 117.183 57.0455ZM118.931 54.0909V57H118.596V54.0909H118.931ZM119.88 54.0909V57H119.545V54.0909H119.88ZM121.381 57.0455C121.184 57.0455 121.011 56.9986 120.862 56.9048C120.714 56.8111 120.599 56.6799 120.516 56.5114C120.433 56.3428 120.392 56.1458 120.392 55.9205C120.392 55.6932 120.433 55.4948 120.516 55.3253C120.599 55.1558 120.714 55.0241 120.862 54.9304C121.011 54.8366 121.184 54.7898 121.381 54.7898C121.578 54.7898 121.75 54.8366 121.898 54.9304C122.046 55.0241 122.162 55.1558 122.244 55.3253C122.328 55.4948 122.369 55.6932 122.369 55.9205C122.369 56.1458 122.328 56.3428 122.244 56.5114C122.162 56.6799 122.046 56.8111 121.898 56.9048C121.75 56.9986 121.578 57.0455 121.381 57.0455ZM121.381 56.7443C121.53 56.7443 121.653 56.706 121.75 56.6293C121.847 56.5526 121.918 56.4517 121.964 56.3267C122.011 56.2017 122.034 56.0663 122.034 55.9205C122.034 55.7746 122.011 55.6387 121.964 55.5128C121.918 55.3868 121.847 55.285 121.75 55.2074C121.653 55.1297 121.53 55.0909 121.381 55.0909C121.231 55.0909 121.108 55.1297 121.011 55.2074C120.915 55.285 120.843 55.3868 120.797 55.5128C120.75 55.6387 120.727 55.7746 120.727 55.9205C120.727 56.0663 120.75 56.2017 120.797 56.3267C120.843 56.4517 120.915 56.5526 121.011 56.6293C121.108 56.706 121.231 56.7443 121.381 56.7443ZM124.58 57L123.784 54.0909H124.142L124.75 56.4602H124.779L125.398 54.0909H125.796L126.415 56.4602H126.444L127.051 54.0909H127.409L126.614 57H126.25L125.608 54.6818H125.586L124.944 57H124.58ZM128.486 57.0455C128.289 57.0455 128.116 56.9986 127.968 56.9048C127.82 56.8111 127.704 56.6799 127.621 56.5114C127.539 56.3428 127.498 56.1458 127.498 55.9205C127.498 55.6932 127.539 55.4948 127.621 55.3253C127.704 55.1558 127.82 55.0241 127.968 54.9304C128.116 54.8366 128.289 54.7898 128.486 54.7898C128.683 54.7898 128.855 54.8366 129.003 54.9304C129.152 55.0241 129.267 55.1558 129.35 55.3253C129.433 55.4948 129.475 55.6932 129.475 55.9205C129.475 56.1458 129.433 56.3428 129.35 56.5114C129.267 56.6799 129.152 56.8111 129.003 56.9048C128.855 56.9986 128.683 57.0455 128.486 57.0455ZM128.486 56.7443C128.636 56.7443 128.759 56.706 128.855 56.6293C128.952 56.5526 129.024 56.4517 129.07 56.3267C129.116 56.2017 129.14 56.0663 129.14 55.9205C129.14 55.7746 129.116 55.6387 129.07 55.5128C129.024 55.3868 128.952 55.285 128.855 55.2074C128.759 55.1297 128.636 55.0909 128.486 55.0909C128.337 55.0909 128.213 55.1297 128.117 55.2074C128.02 55.285 127.949 55.3868 127.902 55.5128C127.856 55.6387 127.833 55.7746 127.833 55.9205C127.833 56.0663 127.856 56.2017 127.902 56.3267C127.949 56.4517 128.02 56.5526 128.117 56.6293C128.213 56.706 128.337 56.7443 128.486 56.7443ZM129.987 57V54.8182H130.31V55.1477H130.333C130.373 55.0398 130.445 54.9522 130.549 54.8849C130.653 54.8177 130.771 54.7841 130.901 54.7841C130.926 54.7841 130.957 54.7846 130.994 54.7855C131.031 54.7865 131.058 54.7879 131.077 54.7898V55.1307C131.066 55.1278 131.04 55.1236 130.999 55.1179C130.96 55.1113 130.917 55.108 130.873 55.108C130.767 55.108 130.672 55.1302 130.589 55.1747C130.506 55.2183 130.441 55.2789 130.393 55.3565C130.345 55.4332 130.322 55.5208 130.322 55.6193V57H129.987ZM131.81 54.0909V57H131.475V54.0909H131.81ZM133.248 57.0455C133.066 57.0455 132.906 56.9995 132.766 56.9077C132.627 56.8149 132.518 56.6842 132.44 56.5156C132.361 56.3461 132.322 56.1458 132.322 55.9148C132.322 55.6856 132.361 55.4867 132.44 55.3182C132.518 55.1496 132.628 55.0194 132.768 54.9276C132.908 54.8357 133.07 54.7898 133.254 54.7898C133.396 54.7898 133.508 54.8134 133.59 54.8608C133.674 54.9072 133.737 54.9602 133.781 55.0199C133.825 55.0786 133.86 55.1269 133.884 55.1648H133.913V54.0909H134.248V57H133.924V56.6648H133.884C133.86 56.7045 133.825 56.7547 133.779 56.8153C133.734 56.875 133.669 56.9285 133.585 56.9759C133.5 57.0223 133.388 57.0455 133.248 57.0455ZM133.293 56.7443C133.428 56.7443 133.541 56.7093 133.634 56.6392C133.727 56.5682 133.798 56.4702 133.846 56.3452C133.894 56.2192 133.918 56.0739 133.918 55.9091C133.918 55.7462 133.895 55.6037 133.847 55.4815C133.8 55.3584 133.73 55.2628 133.637 55.1946C133.544 55.1255 133.43 55.0909 133.293 55.0909C133.151 55.0909 133.033 55.1274 132.938 55.2003C132.844 55.2723 132.774 55.3703 132.727 55.4943C132.68 55.6174 132.657 55.7557 132.657 55.9091C132.657 56.0644 132.681 56.2055 132.728 56.3324C132.776 56.4583 132.847 56.5587 132.941 56.6335C133.036 56.7074 133.153 56.7443 133.293 56.7443ZM135.153 57.0227C135.083 57.0227 135.022 56.9976 134.972 56.9474C134.922 56.8973 134.897 56.8371 134.897 56.767C134.897 56.697 134.922 56.6368 134.972 56.5866C135.022 56.5365 135.083 56.5114 135.153 56.5114C135.223 56.5114 135.283 56.5365 135.333 56.5866C135.383 56.6368 135.408 56.697 135.408 56.767C135.408 56.8134 135.397 56.8561 135.373 56.8949C135.35 56.9337 135.319 56.965 135.281 56.9886C135.243 57.0114 135.2 57.0227 135.153 57.0227ZM136.254 57.0227C136.184 57.0227 136.124 56.9976 136.074 56.9474C136.024 56.8973 135.999 56.8371 135.999 56.767C135.999 56.697 136.024 56.6368 136.074 56.5866C136.124 56.5365 136.184 56.5114 136.254 56.5114C136.324 56.5114 136.384 56.5365 136.435 56.5866C136.485 56.6368 136.51 56.697 136.51 56.767C136.51 56.8134 136.498 56.8561 136.474 56.8949C136.452 56.9337 136.421 56.965 136.382 56.9886C136.344 57.0114 136.302 57.0227 136.254 57.0227ZM137.356 57.0227C137.286 57.0227 137.226 56.9976 137.175 56.9474C137.125 56.8973 137.1 56.8371 137.1 56.767C137.1 56.697 137.125 56.6368 137.175 56.5866C137.226 56.5365 137.286 56.5114 137.356 56.5114C137.426 56.5114 137.486 56.5365 137.536 56.5866C137.586 56.6368 137.612 56.697 137.612 56.767C137.612 56.8134 137.6 56.8561 137.576 56.8949C137.553 56.9337 137.522 56.965 137.484 56.9886C137.446 57.0114 137.403 57.0227 137.356 57.0227Z"/>
              </g>
              <g id="lamp">
              <g id="lamp-base">
              <path d="M227 85.501H200C200 85.501 201.706 84.348 203 83.7559C209.572 80.7493 217.428 80.7493 224 83.7559C225.294 84.348 227 85.501 227 85.501Z"/>
              <path d="M216 76.2036V81.501H212V76.2036C212 73.9334 216 73.9334 216 76.2036Z"/>
              <path d="M227 85.501H200C200 85.501 201.706 84.348 203 83.7559C209.572 80.7493 217.428 80.7493 224 83.7559C225.294 84.348 227 85.501 227 85.501Z"/>
              <path d="M216 76.2036V81.501H212V76.2036C212 73.9334 216 73.9334 216 76.2036Z"/>
              </g>
              <g id="lamp-pole">
              <path d="M213 30.6819V74.501H215V29.501L185 11.501V14.001L213 30.6819Z"/>
              <path d="M184.794 14.031L186.044 12.031C186.46 11.3649 185.981 10.501 185.196 10.501H178C177.448 10.501 177 10.9487 177 11.501V13.501C177 14.0533 177.448 14.501 178 14.501H183.946C184.291 14.501 184.611 14.3234 184.794 14.031Z"/>
              <path d="M213 30.6819V74.501H215V29.501L185 11.501V14.001L213 30.6819Z"/>
              <path d="M184.794 14.031L186.044 12.031C186.46 11.3649 185.981 10.501 185.196 10.501H178C177.448 10.501 177 10.9487 177 11.501V13.501C177 14.0533 177.448 14.501 178 14.501H183.946C184.291 14.501 184.611 14.3234 184.794 14.031Z"/>
              </g>
              <g id="lamp-shade">
              <path d="M169.454 5.61795C169.777 4.12879 176.617 5.61256 176.294 7.10173C175.971 8.5909 174.841 13.8031 174.841 13.8031C172.169 13.2236 170.672 12.8987 168 12.3193C168 12.3193 169.131 7.10711 169.454 5.61795Z"/>
              <path d="M180.415 27.7937C180.734 26.3502 180.74 24.8522 180.432 23.3854C180.124 21.9185 179.508 20.5115 178.62 19.2447C177.732 17.9779 176.589 16.876 175.256 16.0021C173.923 15.1281 172.426 14.4992 170.851 14.1512C169.276 13.8032 167.654 13.7429 166.077 13.9738C164.499 14.2047 162.998 14.7222 161.659 15.4969C160.32 16.2715 159.169 17.2881 158.271 18.4886C157.374 19.6891 156.748 21.05 156.429 22.4935L180.415 27.7937Z"/>
              </g>
              <path id="lamp-lightbulb" d="M165.657 24.9421C165.586 25.2627 165.579 25.594 165.636 25.9173C165.694 26.2406 165.814 26.5494 165.991 26.8262C166.167 27.103 166.397 27.3422 166.666 27.5303C166.935 27.7185 167.238 27.8517 167.559 27.9226C167.879 27.9934 168.211 28.0004 168.534 27.9431C168.857 27.8859 169.166 27.7655 169.443 27.589C169.72 27.4124 169.959 27.183 170.147 26.9139C170.335 26.6448 170.468 26.3414 170.539 26.0208L168.098 25.4814L165.657 24.9421Z"/>
              </g>
              <g id="plant">
              <g id="plant-pot">
              <path d="M49.8824 85.2847H31.1176L26 63.2847H55L49.8824 85.2847Z"/>
              <path d="M24 59.7837H57V62.7837H24V59.7837Z"/>
              </g>
              <path id="plant-stem" d="M40 33.7837C40.3905 33.7837 40.5 34.2837 40.5 34.2837L41 59.7837H40V33.7837Z"/>
              <path id="plant-leaf3" d="M36.3467 38.158C34.1756 36.6847 31.1603 35.099 29.6871 37.2701C28.2139 39.4412 30.8014 41.6573 32.9725 43.1305C35.1436 44.6037 39.6322 44.0184 39.6322 44.0184C39.6322 44.0184 38.5178 39.6312 36.3467 38.158Z"/>
              <path id="plant-leaf4" d="M47.4126 47.1963C49.512 45.6226 51.9925 43.2873 50.4188 41.1879C48.8451 39.0884 45.9077 40.8143 43.8083 42.388C41.7089 43.9617 41 48.2837 41 48.2837C41 48.2837 45.3132 48.7701 47.4126 47.1963Z"/>
              <path id="plant-leaf1" d="M38.5 30.2837C37 29.2837 33.6295 27.046 32.4037 28.8524C31.1779 30.6589 33.3309 32.5028 35.1374 33.7286C36.9439 34.9544 40 34.7837 40 34.7837C40 34.7837 40 31.2837 38.5 30.2837Z"/>
              <path id="plant-leaf2" d="M46.9732 38.7569C48.7515 37.4905 50.8622 35.5984 49.5959 33.8201C48.3295 32.0418 45.8512 33.4177 44.0729 34.684C42.2946 35.9503 41 39.7837 41 39.7837C41 39.7837 45.1949 40.0232 46.9732 38.7569Z"/>
              <path id="plant-leaf5" d="M36.1266 48.4732C33.7526 46.8623 30.4556 45.1284 28.8447 47.5024C27.2338 49.8763 30.0632 52.2995 32.4372 53.9104C34.8111 55.5213 39.719 54.8812 39.719 54.8812C39.719 54.8812 38.5006 50.0841 36.1266 48.4732Z"/>
              <path id="plant-leaf6" d="M48.1729 56.9566C50.4998 55.2784 53.2585 52.7751 51.5803 50.4483C49.902 48.1215 46.656 49.9492 44.3292 51.6274C42.0024 53.3057 40.9219 58.1358 40.9219 58.1358C40.9219 58.1358 45.8461 58.6349 48.1729 56.9566Z"/>
              </g>
              </g>
              </svg>
            </div>
        </div>

        <div className="text" id="text">
          <h2 className="about-title">Hi, I'm Sadie</h2>
          <p className="about-body">Welcome to my corner of the internet!</p>
          <br />
          <p className="about-body">I'm a computer engineering student at Columbia University with a passion for problem-solving and innovation.</p>
          <br />
          <p className="about-body">I embrace analytics and feedback to make data-driven decisions in the code that I write.</p>
          <br />
          <p className="about-body">I’m also a jazz bassist, amateur rock climber, and Lego flower enthusiast.</p>

          <br />

          <div className="about-links">
            <a href="https://github.com/sfreisthler" target="_blank" rel="noopener noreferrer" className="about-github">
              <img id="github-logo" src={github} alt="GitHub Logo" />
            </a>
            <a href="https://www.linkedin.com/in/sadiefreisthler/" target="_blank" rel="noopener noreferrer" className="about-linkedin">
              <img id="linkedin-logo" src={linkedin} alt="LinkedIn Logo" />
            </a>
          </div>
        </div>
      </div>
      <SkillsSection />
    </div>
  );
}

export default App;
