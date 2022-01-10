import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="NavBar">
      <nav className="MainBar">
        <div className="MainBar__logo">
          <img
            className="hamburger"
            src="https://static.wanted.co.kr/images/icon-menu.png"
          />
          <a href="#">
            <img
              className="wanted"
              src="//theme.zdassets.com/theme_assets/9309779/480a35976bf401a88dd7388d8f5c19d77227cd35.png"
            ></img>
          </a>
        </div>
        <ul className="MainBar__class">
          <li>
            <a href="">채용</a>
          </li>
          <li>
            <a href="">이벤트</a>
          </li>
          <li>
            <a href="">직군별 연봉</a>
          </li>
          <li>
            <a href="">이력서</a>
          </li>
          <li>
            <a href="">
              커뮤니티
              <em>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    font-size="9"
                    font-weight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      New
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </em>
            </a>
          </li>
          <li>
            <a href="">프리랜서</a>
          </li>
          <li>
            <a href="">
              AI 합격예측
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    font-size="9"
                    font-weight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      Beta
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </li>
        </ul>
        <aside className="MainBar__icons">
          <ul>
            <li>
              <button className="MainBar__icons__search">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="qt2dnsql4a"
                      d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <use
                      fill="#333"
                      fill-rule="nonzero"
                      stroke="#333"
                      stroke-width=".3"
                      xlinkHref="#qt2dnsql4a"
                    ></use>
                  </g>
                </svg>
              </button>
            </li>
            <li>
              <button className="MainBar__icons__notify">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="bpnpn3yn0a"
                      d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                      <mask id="1dencd96ob" fill="#fff">
                        <use xlinkHref="#bpnpn3yn0a"></use>
                      </mask>
                      <use
                        fill-rule="nonzero"
                        stroke="currentColor"
                        stroke-width=".3"
                        xlinkHref="#bpnpn3yn0a"
                      ></use>
                      <g fill="currentColor" mask="url(#1dencd96ob)">
                        <path d="M0 0H18V18H0z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              {/* <span class="Badge">
                <svg class width="5" height="5" viewBox="0 0 6 6">
                  <g fill="#fff" fill-rule="nonzero">
                    <path
                      d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
                      transform="translate(-123 -375) translate(20 365) translate(98 5)"
                    ></path>
                  </g>
                </svg>
              </span> */}
            </li>
            <li>
              <button type="button" class="profileButton">
                <div class="avatarBorder">
                  <img src="https://static.wanted.co.kr/images/profile_default.png"></img>
                </div>
              </button>
            </li>
            <li class="mdMoreVisible leftDivision">
              <a class="dashboardButton" href="#">
                기업 서비스
              </a>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navigation;
