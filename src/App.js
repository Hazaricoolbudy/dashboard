// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
    <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container"> 
     
      <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo"> <a href="index.html" className="app-brand-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="208" height="38" fill="none" viewBox="0 0 208 38">
            <path fill="#373435" d="M.576 7.797h5.159v2.912c1.849-2.24 4.053-3.366 6.61-3.366 1.358 0 2.538.281 3.535.844 1.003.563 1.821 1.413 2.457 2.55.935-1.137 1.944-1.987 3.023-2.55a7.368 7.368 0 0 1 3.46-.844c1.555 0 2.873.315 3.956.953 1.078.638 1.883 1.57 2.416 2.804.389.905.58 2.378.58 4.415v13.629h-5.608V16.96c0-2.118-.192-3.481-.58-4.092-.52-.802-1.325-1.206-2.402-1.206-.786 0-1.53.24-2.224.719-.689.487-1.194 1.193-1.502 2.118-.308.931-.458 2.4-.458 4.407v10.235H13.39V17.46c0-2.071-.103-3.415-.3-4.011-.198-.602-.506-1.056-.928-1.351-.416-.296-.989-.438-1.705-.438a4.07 4.07 0 0 0-2.333.7c-.696.473-1.188 1.144-1.488 2.028-.3.884-.45 2.352-.45 4.395v10.358H.579L.576 7.797Zm39.708 6.58-5.076-.905c.572-2.085 1.563-3.627 2.962-4.627 1.4-1 3.48-1.502 6.236-1.502 2.504 0 4.373.295 5.603.891 1.221.597 2.088 1.352 2.585 2.27.497.919.75 2.597.75 5.052l-.083 6.581c0 1.87.089 3.256.266 4.147.178.892.511 1.845 1.003 2.86h-5.567c-.144-.37-.328-.92-.539-1.645a7.347 7.347 0 0 0-.197-.658c-.955.945-1.98 1.653-3.071 2.124a8.661 8.661 0 0 1-3.487.714c-2.177 0-3.896-.597-5.153-1.79-1.255-1.186-1.882-2.694-1.882-4.517 0-1.2.286-2.277.86-3.223a5.6 5.6 0 0 1 2.41-2.165c1.03-.502 2.518-.94 4.461-1.316 2.621-.494 4.443-.96 5.453-1.385v-.569c0-1.098-.266-1.878-.797-2.352-.539-.466-1.55-.7-3.03-.7-1.002 0-1.78.199-2.34.603-.57.398-1.02 1.104-1.367 2.112Zm7.532 4.566c-.716.24-1.855.527-3.418.864-1.555.337-2.58.666-3.057.98-.73.528-1.099 1.188-1.099 1.988 0 .795.294 1.474.88 2.049.586.577 1.33.864 2.238.864 1.01 0 1.98-.337 2.9-1 .674-.514 1.124-1.132 1.337-1.871.144-.48.22-1.4.22-2.749v-1.125Zm7.773 4.195 5.65-.864c.24 1.09.725 1.92 1.46 2.48.731.57 1.761.85 3.077.85 1.455 0 2.546-.267 3.282-.802.492-.376.736-.884.736-1.516 0-.424-.136-.78-.402-1.062-.28-.267-.908-.52-1.877-.747-4.537-1.008-7.41-1.926-8.624-2.756-1.685-1.16-2.524-2.762-2.524-4.813 0-1.859.73-3.415 2.183-4.675 1.452-1.262 3.704-1.892 6.755-1.892 2.907 0 5.07.48 6.482 1.432 1.413.96 2.388 2.372 2.921 4.243l-5.28.987c-.226-.836-.662-1.48-1.297-1.926-.636-.446-1.541-.666-2.724-.666-1.488 0-2.551.206-3.2.624-.43.295-.642.68-.642 1.145 0 .405.184.748.56 1.029.512.376 2.266.905 5.268 1.591 3.001.686 5.097 1.522 6.283 2.517 1.18 1 1.768 2.405 1.768 4.203 0 1.953-.81 3.64-2.443 5.044-1.624 1.405-4.032 2.113-7.227 2.113-2.893 0-5.186-.59-6.877-1.762-1.683-1.17-2.788-2.762-3.307-4.777Zm33.2-15.341v4.484H84.94v8.643c0 1.756.034 2.777.109 3.064.075.287.239.527.505.72.259.183.572.28.95.28.524 0 1.276-.178 2.265-.54l.472 4.387c-1.303.562-2.777.844-4.429.844-1.01 0-1.918-.17-2.73-.513-.81-.343-1.404-.79-1.78-1.33-.382-.549-.64-1.282-.79-2.213-.117-.658-.178-1.988-.178-3.997v-9.343h-2.58V7.799h2.58V3.56L84.942.229v7.568h3.847Zm14.931 14.6 5.608.945c-.716 2.063-1.857 3.634-3.404 4.716-1.555 1.076-3.501 1.617-5.828 1.617-3.692 0-6.427-1.213-8.195-3.64-1.4-1.948-2.102-4.401-2.102-7.37 0-3.537.922-6.313 2.757-8.314 1.835-2.01 4.162-3.01 6.974-3.01 3.152 0 5.642 1.048 7.471 3.147 1.822 2.098 2.696 5.312 2.613 9.646H95.571c.042 1.672.492 2.974 1.358 3.907.86.934 1.938 1.4 3.221 1.4.88 0 1.616-.24 2.21-.72.604-.48 1.054-1.254 1.36-2.324Zm.327-5.717c-.041-1.639-.458-2.885-1.255-3.735-.797-.856-1.766-1.282-2.913-1.282-1.221 0-2.232.451-3.029 1.351-.8.898-1.188 2.124-1.174 3.668l8.371-.002Zm14.245 12.462h-5.609V7.797h5.2v3.03c.894-1.433 1.699-2.373 2.416-2.818.716-.446 1.529-.666 2.435-.666 1.282 0 2.518.356 3.706 1.062l-1.743 4.922c-.949-.616-1.829-.925-2.64-.925-.792 0-1.461.22-2.007.652-.547.438-.975 1.22-1.289 2.358-.314 1.137-.471 3.523-.471 7.15v6.58h.002Z"/>
            <path fill="#ED3237" d="M127.417 7.797h5.239v3.132c.683-1.07 1.597-1.934 2.757-2.597 1.16-.658 2.449-.987 3.862-.987 2.463 0 4.559.973 6.278 2.92 1.718 1.94 2.579 4.655 2.579 8.125 0 3.57-.866 6.34-2.599 8.322-1.733 1.982-3.835 2.969-6.305 2.969-1.174 0-2.238-.234-3.193-.706-.949-.465-1.958-1.268-3.01-2.405v10.68h-5.608V7.797Zm5.525 10.343c0 2.406.472 4.181 1.419 5.333.942 1.145 2.094 1.72 3.446 1.72 1.302 0 2.388-.527 3.254-1.584.866-1.056 1.297-2.784 1.297-5.19 0-2.248-.444-3.913-1.338-5.003-.886-1.09-1.994-1.63-3.31-1.63-1.371 0-2.51.534-3.412 1.603-.906 1.07-1.356 2.653-1.356 4.751Zm23.729 11.002h-5.609V7.797h5.2v3.03c.894-1.433 1.7-2.373 2.416-2.818.716-.446 1.529-.666 2.435-.666 1.283 0 2.518.356 3.706 1.062l-1.742 4.922c-.949-.616-1.83-.925-2.641-.925-.791 0-1.46.22-2.007.652-.546.438-.975 1.22-1.288 2.358-.314 1.137-.472 3.523-.472 7.15v6.58h.002Zm21.57-6.745 5.608.945c-.716 2.063-1.855 3.634-3.404 4.716-1.555 1.076-3.501 1.617-5.828 1.617-3.692 0-6.427-1.213-8.195-3.64-1.399-1.948-2.102-4.401-2.102-7.37 0-3.537.922-6.313 2.757-8.314 1.835-2.01 4.162-3.01 6.974-3.01 3.152 0 5.642 1.048 7.471 3.147 1.822 2.098 2.696 5.312 2.613 9.646h-14.043c.042 1.672.492 2.974 1.358 3.907.86.934 1.938 1.4 3.221 1.4.88 0 1.616-.24 2.21-.72.602-.48 1.054-1.254 1.36-2.324Zm.327-5.717c-.041-1.639-.458-2.885-1.255-3.735-.799-.856-1.768-1.282-2.913-1.282-1.221 0-2.232.451-3.029 1.351-.799.898-1.188 2.124-1.174 3.668l8.371-.002Zm8.717-8.883h5.239v3.132c.683-1.07 1.597-1.934 2.757-2.597 1.161-.658 2.449-.987 3.862-.987 2.463 0 4.559.973 6.278 2.92C207.14 12.206 208 14.92 208 18.39c0 3.57-.866 6.34-2.599 8.322-1.733 1.982-3.834 2.969-6.305 2.969-1.174 0-2.238-.234-3.193-.706-.949-.465-1.958-1.268-3.01-2.405v10.68h-5.608V7.797Zm5.525 10.343c0 2.406.472 4.181 1.419 5.333.942 1.145 2.094 1.72 3.446 1.72 1.302 0 2.388-.527 3.254-1.584.867-1.056 1.297-2.784 1.297-5.19 0-2.248-.444-3.913-1.338-5.003-.886-1.09-1.993-1.63-3.31-1.63-1.371 0-2.51.534-3.412 1.603-.904 1.07-1.356 2.653-1.356 4.751Z"/>
          </svg>
          </a> <a href={{javascript:void(0)}} className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"> <i className="bx bx-chevron-left bx-sm align-middle"></i> </a> </div>
        <div className="menu-inner-shadow"></div>
        <ul className="menu-inner py-1">
         
          <li className="menu-item active"> <a href="index.html" className="menu-link"> <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
            </a> </li>
          
          {/*
          <!--
          <li className="menu-item"> <a href="javascript:void(0);" className="menu-link menu-toggle"> <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Layouts">Test</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item"> <a href="layouts-without-menu.html" className="menu-link">
                <div data-i18n="Without menu">Practice Test</div>
                </a> </li>
              <li className="menu-item"> <a href="layouts-without-navbar.html" className="menu-link">
                <div data-i18n="Without navbar">Without navbar</div>
                </a> </li>
              <li className="menu-item"> <a href="layouts-container.html" className="menu-link">
                <div data-i18n="Container">Container</div>
                </a> </li>
              <li className="menu-item"> <a href="layouts-fluid.html" className="menu-link">
                <div data-i18n="Fluid">Fluid</div>
                </a> </li>
              <li className="menu-item"> <a href="layouts-blank.html" className="menu-link">
                <div data-i18n="Blank">Blank</div>
                </a> </li>
            </ul>
          </li>
  -->*/}
          <li className="menu-header small text-uppercase"> <span className="menu-header-text">Test</span> </li>
          <li className="menu-item"> <a href={{javascript:void(0)}} className="menu-link menu-toggle"> <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Practice Test</div>
            </a>
            <ul className="menu-sub svg-icon">
              <li className="menu-item  active"> <a href="listening-test.html" className="menu-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" viewBox="0 0 17 16">
                  <path fill="#D91D37" d="M12.958 9.074v6.153c.829-.009 1.548-.442 1.912-1.076a.471.471 0 0 0 .233.063h.093c.16 0 .293-.08.372-.18a.57.57 0 0 0 .125-.359V7.806h-.247c-.134 0-.242-.102-.24-.225v-.075c0-3.524-3.097-6.381-6.917-6.381S1.37 3.98 1.37 7.505v.075c.003.123-.105.225-.24.225H.885v5.87c0 .134.043.259.125.36.08.1.213.18.372.18h.093a.47.47 0 0 0 .217-.053c.367.628 1.083 1.057 1.909 1.066V9.074a2.273 2.273 0 0 0-1.629.696V8.02a.444.444 0 0 0 .373-.383l.005-.02v-.068c0-1.514.664-2.882 1.74-3.874 1.075-.992 2.559-1.605 4.2-1.605 1.64 0 3.123.613 4.199 1.605 1.075.992 1.74 2.36 1.74 3.874v.048c0 .208.16.385.377.424v1.77a2.269 2.269 0 0 0-1.648-.717Z"/>
                  <path fill="#D91D37" d="M15.445 7.805h.468c.131 0 .239-.097.242-.219v-.08c0-4.009-3.522-7.258-7.866-7.258C3.944.248.422 3.498.422 7.505l.001.081c.002.122.11.219.241.219h.467c.135 0 .243-.101.24-.225v-.075c0-3.524 3.098-6.381 6.918-6.381 3.82 0 6.917 2.857 6.917 6.381v.075c-.002.124.106.225.24.225ZM0 12.536c0 .405.354.735.793.74v-2.25c-.439.006-.793.335-.793.741v.769Zm15.786.74c.439-.005.793-.335.793-.74v-.769c0-.406-.354-.735-.793-.74v2.249ZM3.743 9.073v6.175h.808c.127 0 .23-.095.23-.211V9.284c0-.116-.103-.21-.23-.21h-.808Zm8.021.211v5.753c0 .116.102.211.228.211h.81V9.073h-.81c-.126 0-.228.095-.228.211Z"/>
                </svg>
                <div data-i18n="Account">Listening</div>
                </a> </li>
              <li className="menu-item"> <a href="pages-account-settings-notifications.html" className="menu-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" viewBox="0 0 17 16">
                  <path fill="#D91D37" d="M16.15 4.04c-.235 0-.426.204-.426.455v9.84h-4.718l3.69-1.27a.453.453 0 0 0 .297-.434V2.706c0-.251-.191-.455-.427-.455-.235 0-.426.204-.426.455v9.595l-3.643 1.252 2.637-2.165a.466.466 0 0 0 .166-.362V.704a.465.465 0 0 0-.236-.408.408.408 0 0 0-.447.042L8.289 3.82 3.962.34a.403.403 0 0 0-.447-.042.459.459 0 0 0-.236.409v10.322c0 .141.061.276.166.36l2.637 2.167L2.439 12.3V2.706c0-.251-.191-.455-.426-.455-.236 0-.427.204-.427.455v9.927c0 .198.12.373.296.434l3.691 1.27H.853V4.495c0-.251-.191-.455-.427-.455-.235 0-.426.204-.426.455v10.297c0 .252.191.456.426.456h15.726c.236 0 .427-.204.427-.456V4.495c-.002-.251-.193-.455-.429-.455ZM4.13 10.802V1.618l3.73 3v9.25l-3.73-3.066Zm4.586-6.183 3.73-3.001v9.184l-3.73 3.064V4.619Z"/>
                </svg>
                <div data-i18n="Reading ">Reading </div>
                </a> </li>
              <li className="menu-item"> <a href="pages-account-settings-connections.html" className="menu-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" viewBox="0 0 17 16">
                  <path fill="#D91D37" d="m3.03 11.255-.472-.08s-.182-.052-.132-.226c.05-.174.47-2.825.47-2.915 0-.09.017-.396.134-.582.118-.185 1.057-1.709 1.057-1.709s.534-.84 1.402-.876c.868-.036 3.603-.09 3.603-.09s.34-.084.663.246l.243.237s.13.1.226-.003C10.321 5.155 14.86.963 14.86.963s.766-.03.713.78l-4.538 4.194s-.12.133-.059.19c.062.057 1.572 1.572 1.772 1.722.2.15.422.552 1.162.612.74.06.71.225.71.225s.185.933.197 1.34c.012.408.097 1.65-.308 2.658l-.106.24s-.04.084-.205.036c-.164-.048-1.467-.342-2.11.015-.642.357-.977.492-.977.492s-.264.135-.462.126c-.198-.01-1.397.033-2.237-.147 0 0-.346.648-.727.707-.382.06-.64.066-1.068-.108 0 0-.112.01-.252.146-.141.136-.37.388-1.098.262a1.304 1.304 0 0 1-.967-.761s-.517.03-.869-.133c-.352-.162-.422-.305-.422-.305l-.091.048-.707-.813.434-.408s.088-.504.423-.62l-.037-.206Zm.06-.696s-.018.12.146.12c.164 0 .75.012 1.197-1.325 0 0 .15-.635.146-.756 0 0-.004-.095.101-.171.106-.077 1.037-1.18 1.037-1.18s.294-.347.798-.155l.968.366s.191.072.288-.013c.097-.084 1.778-1.643 1.778-1.643s.117-.096 0-.258l-.314-.189s-.075-.06-.273-.06-3.116.094-3.116.094-.836.077-1.434.832l-.836 1.386s-.132.198-.177.576c-.043.379-.31 2.376-.31 2.376Zm2.075-.774L7.03 8.09s.132-.122-.066-.243-.41-.136-.41-.136-.254-.034-.413.064C5.984 7.873 5.09 8.81 5.09 8.81s-.04.49-.158.738c0 0-.057.117 0 .206.057.09.097.095.114.1a.504.504 0 0 0 .119-.068Zm1.075.654c.076.09.229 0 .229 0s1.338-.594 1.49-.654c.153-.06.077-.236.077-.236s-.018-.327-.088-.561c-.07-.234-.264-.066-.264-.066l-1.443 1.314c-.001 0-.077.113-.001.203Zm-1.742 1.062c-.887.114-1.186.57-1.186.57s-.434.852.452 1.062c.886.21 2.226-.414 2.226-.414.495.135 4.258.258 4.48.246.223-.013.376-.072.376-.072s-.076.066.827-.432c.904-.498 1.954-.162 2.166-.108.211.054.216-.12.216-.12.335-1.014.1-3.15.1-3.15s-1.737-.575-2.218-1.21c-.481-.637-1.49-1.44-1.49-1.44l-2.043 1.87s.25 1.645.26 1.728c.012.083-.072.114-.072.114-1.443.36-2.94 1.35-2.94 1.35s-.269-.108-1.154.006Zm.912 2.405c.537.135.76-.279.848-.38.088-.103.061-.172.061-.172s-.108-.282-.328-.12c-.22.162-.79.291-.79.291s-.328.246.209.381Zm1.418-.425c-.004.034.095.175.273.22.179.045.293-.054.372-.143.08-.088-.048-.223-.136-.208-.088.016-.398-.024-.398-.024-.08-.01-.107.121-.11.155Zm-4.888-.726.677.804-.233.235-.7-.828.256-.211Zm-.775.707.234-.277.699.825-.23.256-.703-.804Zm-.235.298.587.69-1.332.785s-.264.087-.161-.192l.906-1.284ZM15.505.647s.543.327.526.62L16.5.825l-.498-.576-.497.399Z"/>
                  <path fill="#D91D37" d="M10.1 4.549s-.017-.75.353-1.182c.37-.432 2.4-2.537 2.4-2.537s.461-.378.838-.144l.376.234-3.966 3.629Z"/>
                </svg>
                <div data-i18n="Writing">Writing</div>
                </a> </li>
              <li className="menu-item"> <a href="pages-account-settings-connections.html" className="menu-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="none" viewBox="0 0 10 16">
                  <path fill="#DB364D" fill-rule="evenodd" d="M4.578 11.586a2.636 2.636 0 0 0 2.643-2.66v-.525h.77v.36a3.415 3.415 0 0 1-3.408 3.419c-1.936 0-3.465-1.534-3.465-3.419v-.36h.823v.526c0 1.48 1.166 2.659 2.637 2.659ZM1.113 7.86v-.234c0-.17-.12-.292-.3-.292H.29c-.179 0-.29.122-.29.292v1.13c0 2.24 1.762 4.252 3.988 4.544v.774H1.641c-.18 0-.29.112-.29.293h6.46c0-.18-.11-.293-.29-.293H5.17V13.3c2.231-.292 3.998-2.299 3.998-4.544v-1.13c0-.17-.121-.292-.3-.292h-.523c-.18 0-.358.122-.358.292v.234h-.77V4.967H1.941V7.86h-.828Zm.237 6.794h6.462H1.35Zm0 .36c0 .112.112.234.29.234h5.881c.111 0 .29-.122.29-.234h-6.46ZM7.221 4.441v-.414h-5.28v.414h5.28Zm0-.94v-.594A2.636 2.636 0 0 0 4.578.248c-1.47 0-2.637 1.179-2.637 2.66V3.5h5.28Z" clip-rule="evenodd"/>
                </svg>
                <div data-i18n="Speaking">Speaking</div>
                </a> </li>
            </ul>
          </li>
          
         {/* <!--
          <li className="menu-item"> <a href="javascript:void(0);" className="menu-link menu-toggle"> <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
            <div data-i18n="Authentications">Authentications</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item"> <a href="auth-login-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Login</div>
                </a> </li>
              <li className="menu-item"> <a href="auth-register-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Register</div>
                </a> </li>
              <li className="menu-item"> <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Forgot Password</div>
                </a> </li>
            </ul>
          </li>
  --> 
          <!--
          <li className="menu-item"> <a href="javascript:void(0);" className="menu-link menu-toggle"> <i className="menu-icon tf-icons bx bx-cube-alt"></i>
            <div data-i18n="Misc">Misc</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item"> <a href="pages-misc-error.html" className="menu-link">
                <div data-i18n="Error">Error</div>
                </a> </li>
              <li className="menu-item"> <a href="pages-misc-under-maintenance.html" className="menu-link">
                <div data-i18n="Under Maintenance">Under Maintenance</div>
                </a> </li>
            </ul>
          </li>
  -->
*/}
        </ul>
      </aside>
      {/*<!-- / Menu --> 
      
<!-- Layout container -->*/}
      <div className="layout-page"> 
        {/*<!-- Navbar -->*/}
        
        <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme mp-search"
              id="layout-navbar"
            >
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"> <a className="nav-item nav-link px-0 me-xl-4" href={{javascript:void(0)}}> <i className="bx bx-menu bx-sm"></i> </a> </div>
          <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse"> 
           
            <div className="navbar-nav align-items-center">
              <div className="nav-item d-flex align-items-center"> <i className="bx bx-search fs-4 lh-0"></i>
                <input
                      type="text"
                      className="form-control border-0 shadow-none"
                      placeholder="Search..."
                      aria-label="Search..."
                    />
              </div>
            </div>
            
            <ul className="navbar-nav flex-row align-items-center ms-auto">
             
              <li className="nav-item lh-1 me-3">
                <button type="button" className="btn rounded-pill btn-success">Get Started</button>
              </li>
              
             
              <li className="nav-item navbar-dropdown dropdown-user dropdown"> <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                <div className="avatar avatar-online"> <img src="assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" /> </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li> <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online"> <img src="assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" /> </div>
                      </div>
                      <div className="flex-grow-1"> <span className="fw-semibold d-block">John Doe</span> <small className="text-muted">Admin</small> </div>
                    </div>
                    </a> </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li> <a className="dropdown-item" href="/"> <i className="bx bx-user me-2"></i> <span className="align-middle">My Profile</span> </a> </li>
                  <li> <a className="dropdown-item" href="/"> <i className="bx bx-cog me-2"></i> <span className="align-middle">Settings</span> </a> </li>
                  <li> <a className="dropdown-item" href="/"> <span className="d-flex align-items-center align-middle"> <i className="flex-shrink-0 bx bx-credit-card me-2"></i> <span className="flex-grow-1 align-middle">Billing</span> <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span> </span> </a> </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li> <a className="dropdown-item" href="auth-login-basic.html"> <i className="bx bx-power-off me-2"></i> <span className="align-middle">Log Out</span> </a> </li>
                </ul>
              </li>
             {/* <!--/ User -->*/}
            </ul>
          </div>
        </nav>
        
       {/* <!-- / Navbar --> 
        
<!-- Content wrapper -->*/}
        <div className="content-wrapper"> 
        {/*  <!-- Content -->*/}
          
          <div className="container-xxl flex-grow-1 ">
            <div className="row">
              <h5 className="card-header fw-bold">Student Dashboard</h5>
              <div className="col-md-12">
                <div className="student-info-box bg-white shadow-sm">
                  <div className="row">
                    <div className="col-6 col-md-3 col-6 text-center mx-auto linespe">
                      <div className="score-box">
                        <div className="flex-shrink-0">
                          <div id="listening"> </div>
                        </div>
                        <h3>Listening</h3>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 col-6 text-center mx-auto linespe">
                      <div className="score-box">
                        <div className="flex-shrink-0">
                          <div id="Reading"></div>
                        </div>
                        <h3>Reading</h3>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 col-6 text-center mx-auto linespe">
                      <div className="score-box">
                        <div className="flex-shrink-0">
                          <div id="Writing"></div>
                        </div>
                        <h3>Writing</h3>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 col-6 text-center mx-auto linespe">
                      <div className="score-box">
                        <div className="flex-shrink-0">
                          <div id="Speaking"></div>
                        </div>
                        <h3>Speaking</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
           {/* <!-- Free Live Classes -->*/}
            
            <div className="live-lect my-3">
              <div className="row ">
                <div className="free-live-heading mt-1">
                  <p>Upcoming </p>
                  <div className="color-live mx-2"> Free </div>
                  <p>Live Classes </p>
                </div>
              </div>
              <div className="slider slider-nav live-classes pt-md-4 mt-md-0 mt-3 mb-0">
                <div className="live-lecture ">
                  <div className="live-info border rounded">
                    <div className="live-thumb">
                      <div className="img-thum"> <img src="img/cardimage.png" alt="" title=""/> </div>
                      <div className="live-detail">
                        <div className="lv-title"> Live </div>
                        <div className="lv-no"> 64 </div>
                      </div>
                      <div className="play-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="none" viewBox="0 0 62 62">
                          <circle cx="31" cy="31" r="31" fill="#fff"/>
                          <path fill="#F92D2D" d="M22.604 45.687V16.313c0-1.656 1.897-2.594 3.214-1.59L45.063 29.41a2 2 0 0 1 0 3.18L25.818 47.277c-1.317 1.005-3.214.066-3.214-1.59Z"/>
                        </svg>
                      </div>
                      <div className="start-duration"> Started at 1:15 pm </div>
                    </div>
                    <div className="live-desc-info">
                      <div className="live-lecture-subject"> IELTS </div>
                      <div className="live-subject-title"> IELTS Quiz the day: How to use
                        vocabulary? </div>
                      <div className="live-author"> By Amit Rohra </div>
                      <button type="button" className="btn btn-danger p-2 mt-3">Join Now</button>
                    </div>
                  </div>
                </div>
                <div className="live-lecture ">
                  <div className="live-info border rounded">
                    <div className="live-thumb">
                      <div className="img-thum"> <img src="img/cardimage.png" alt="" title=""/> </div>
                      <div className="live-detail">
                        <div className="lv-title"> Live </div>
                        <div className="lv-no"> 64 </div>
                      </div>
                      <div className="play-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="none" viewBox="0 0 62 62">
                          <circle cx="31" cy="31" r="31" fill="#fff"/>
                          <path fill="#F92D2D" d="M22.604 45.687V16.313c0-1.656 1.897-2.594 3.214-1.59L45.063 29.41a2 2 0 0 1 0 3.18L25.818 47.277c-1.317 1.005-3.214.066-3.214-1.59Z"/>
                        </svg>
                      </div>
                      <div className="start-duration"> Started at 1:15 pm </div>
                    </div>
                    <div className="live-desc-info">
                      <div className="live-lecture-subject"> IELTS </div>
                      <div className="live-subject-title"> IELTS Quiz the day: How to use
                        vocabulary? </div>
                      <div className="live-author"> By Amit Rohra </div>
                      <button type="button" className="btn btn-outline-danger p-2 mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" fill="none" viewBox="0 0 17 23">
                        <path stroke="#F92D2D" d="m5.544 18.262-4.028-.9c-.343-.085-.888-.355-.834-.839.03-.267.262-.453.485-.603l.55-.372c.676-.43 2.103-1.78 2.412-3.753.38-2.436.724-6.487 5.423-7.417a1.55 1.55 0 0 1 .359-.03c.694.028 2.034.196 3.02.713 1.607.739 4.322 3.618 2.332 9.225-.304.802-.547 2.791.748 4.629.152.214.294.445.311.707.026.385-.08.814-.572.877a1.033 1.033 0 0 1-.354-.032l-4.267-.955m-5.585-1.25c-.132 1.01.152 3.126 2.343 3.522 2.19.396 3.074-1.35 3.242-2.272m-5.585-1.25 5.585 1.25m-.582-17.157-.089.396a1.459 1.459 0 0 0 2.847.637l.09-.396c.086-.387.159-1.457-1.18-1.756-1.07-.24-1.558.646-1.668 1.119Z"/>
                      </svg>
                      Remind Me</button>
                    </div>
                  </div>
                </div>
                <div className="live-lecture ">
                  <div className="live-info border rounded">
                    <div className="live-thumb">
                      <div className="img-thum"> <img src="img/cardimage.png" alt="" title=""/> </div>
                      <div className="live-detail">
                        <div className="lv-title"> Live </div>
                        <div className="lv-no"> 64 </div>
                      </div>
                      <div className="play-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="none" viewBox="0 0 62 62">
                          <circle cx="31" cy="31" r="31" fill="#fff"/>
                          <path fill="#F92D2D" d="M22.604 45.687V16.313c0-1.656 1.897-2.594 3.214-1.59L45.063 29.41a2 2 0 0 1 0 3.18L25.818 47.277c-1.317 1.005-3.214.066-3.214-1.59Z"/>
                        </svg>
                      </div>
                      <div className="start-duration"> Started at 1:15 pm </div>
                    </div>
                    <div className="live-desc-info">
                      <div className="live-lecture-subject"> IELTS </div>
                      <div className="live-subject-title"> IELTS Quiz the day: How to use
                        vocabulary? </div>
                      <div className="live-author"> By Amit Rohra </div>
                      <button type="button" className="btn btn-danger p-2 mt-3">Join Now</button>
                    </div>
                  </div>
                </div>
                <div className="live-lecture ">
                  <div className="live-info border rounded">
                    <div className="live-thumb">
                      <div className="img-thum"> <img src="img/cardimage.png" alt="" title=""/> </div>
                      <div className="live-detail">
                        <div className="lv-title"> Live </div>
                        <div className="lv-no"> 64 </div>
                      </div>
                      <div className="play-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="none" viewBox="0 0 62 62">
                          <circle cx="31" cy="31" r="31" fill="#fff"/>
                          <path fill="#F92D2D" d="M22.604 45.687V16.313c0-1.656 1.897-2.594 3.214-1.59L45.063 29.41a2 2 0 0 1 0 3.18L25.818 47.277c-1.317 1.005-3.214.066-3.214-1.59Z"/>
                        </svg>
                      </div>
                      <div className="start-duration"> Started at 1:15 pm </div>
                    </div>
                    <div className="live-desc-info">
                      <div className="live-lecture-subject"> IELTS </div>
                      <div className="live-subject-title"> IELTS Quiz the day: How to use
                        vocabulary? </div>
                      <div className="live-author"> By Amit Rohra </div>
                      <button type="button" className="btn btn-danger p-2 mt-3">Join Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          {/*  <!-- Live Classes ---> 
            
<!-- Top Rank -->*/}
            
            <div className="row">
              <h5 className="card-header fw-bold">Top 10 IELTS Leader Box</h5>
              <div className="rank-grid">
                <div className="leader-box rankone  shadow-lg pb-3" style={{background: `#F5FEFF`}}>
                  <div className="rank-tag"><img src="img/rank-1.png" alt="Rank 1"/> </div>
                  <div className="topperimg"> <img src="img/student-img.png" alt="Student Name"/> </div>
                  <div className="student-name">
                    <p>Amandeep Singh</p>
                  </div>
                  <div className="student-location">
                    <p>Chandigarh</p>
                  </div>
                  <div className="ietls-dt-info">
                    <div className="dt-text">
                      <div className="td-logo"> <img src="img/IELTS-logo 1.png" alt="Logo"/> </div>
                      <div className="it-band"> 8 Band </div>
                    </div>
                  </div>
                </div>
                <div className="leader-box rankone  shadow-lg  pb-3" style={{background: `#FFF6F6`}}>
                  <div className="rank-tag"><img src="img/rank-2.png" alt="Rank 2"/> </div>
                  <div className="topperimg"> <img src="img/student-img.png" alt="Student Name"/> </div>
                  <div className="student-name">
                    <p>Ravinder Kumar</p>
                  </div>
                  <div className="student-location">
                    <p>Chandigarh</p>
                  </div>
                  <div className="ietls-dt-info">
                    <div className="dt-text">
                      <div className="td-logo"> <img src="img/IELTS-logo 1.png" alt="Logo"/> </div>
                      <div className="it-band"> 8 Band </div>
                    </div>
                  </div>
                </div>
                <div className="leader-box rankone  shadow-lg  pb-3" style={{background: `#FFF9EF`}}>
                  <div className="rank-tag"><img src="img/rank-3.png" alt="Rank 1"/> </div>
                  <div className="topperimg"> <img src="img/student-img.png" alt="Student Name"/> </div>
                  <div className="student-name">
                    <p>Kiriti Dhiman</p>
                  </div>
                  <div className="student-location">
                    <p>Delhi</p>
                  </div>
                  <div className="ietls-dt-info">
                    <div className="dt-text">
                      <div className="td-logo"> <img src="img/IELTS-logo 1.png" alt="Logo"/> </div>
                      <div className="it-band"> 8 Band </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
           {/* <!-- Top Rank --> 
            
<!-- student list -->*/}
            
            <div className="table-responsive text-nowrap mt-5">
              <table className="table">
                <thead className="table-dark text-white">
                  <tr>
                    <th className="text-white">Rank</th>
                    <th className="text-white">Name</th>
                    <th className="text-white">Course</th>
                    <th className="text-white">Band</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0 bg-white">
                  <tr className="active-student">
                    <td>13th</td>
                    <td><div className="st-tb-rank">
                        <div className="topperimg"> <img src="img/student-img.png" alt="Student Name"/> </div>
                        <div className="st-dt-txt">
                
                <div className="act-student">
                <strong>Amandeep Singh</strong> 
                   <div className="active-you badge bg-danger mx-2">You</div>
                </div>					  
                          <p>Amritsar</p>
                        </div>
                      </div></td>
                    <td><div className="course-tb-img"><img src="img/IELTS-logo 1.png" alt="IELTS"/></div></td>
                    <td> 8 Band </td>
                  </tr>
                  <tr>
                    <td>4th</td>
                    <td><div className="st-tb-rank">
                        <div className="topperimg"> <img src="img/student-img.png" alt="Student Name"/> </div>
                    <div className="st-dt-txt">
                
                <div className="act-student">
                <strong>Jasmeet Singh</strong> 
                 
                </div>					  
                          <p>Amritsar</p>
                        </div>
                      </div></td>
                    <td><div className="course-tb-img"><img src="img/IELTS-logo 1.png" alt="IELTS"/></div></td>
                    <td> 8 Band </td>
                  </tr>
                  <tr>
                    <td>6th</td>
                    <td><div className="st-tb-rank">
                        <div className="topperimg"> <img src="img/student-img.png" alt="Student Name"/> </div>
                           <div className="st-dt-txt">
                
                <div className="act-student">
                <strong>Ravideep Singh</strong> 
                 
                </div>					  
                          <p>Chandigarh</p>
                        </div>
                      </div></td>
                    <td><div className="course-tb-img"><img src="img/IELTS-logo 1.png" alt="IELTS"/></div></td>
                    <td> 8 Band </td>
                  </tr>
                  <tr>
                    <td>7th</td>
                    <td><div className="st-tb-rank">
                        <div className="topperimg"> <img src="img/student-img.png" alt="Student Name"/> </div>
                        <div className="st-dt-txt">
                
                <div className="act-student">
                <strong>Jasmeet Singh</strong> 
                 
                </div>					  
                          <p>Ludhiana</p>
                        </div>
                      </div></td>
                    <td><div className="course-tb-img"><img src="img/IELTS-logo 1.png" alt="IELTS"/></div></td>
                    <td> 8 Band </td>
                  </tr>
                  <tr>
                    <td>8th</td>
                    <td><div className="st-tb-rank">
                        <div className="topperimg"> <img src="img/student-img.png" alt="Student Name"/> </div>
                     <div className="st-dt-txt">
                
                <div className="act-student">
                <strong>Ravinder Singh</strong> 
                 
                </div>					  
                          <p>Moga</p>
                        </div>
                      </div></td>
                    <td><div className="course-tb-img"><img src="img/IELTS-logo 1.png" alt="IELTS"/></div></td>
                    <td> 8 Band </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          {/*  <!-- student list --> 
        
        
<!-- Study material -->*/}
        
    
        
        <div className="bg-white shadow-lg px-3 pb-2 mb-4">
            <h5 className="card-header fw-bold">Study Material</h5>
          
        
        
            <div className="slider material-study mb-7 mt-1">
                    <div className="material-studybox mtbox1">
                      <div className="mtbox-head">
                        <h5>Previous Year</h5>
                        <p>Question Papers</p>
                      </div>
                      <div className="mt-box-img"> <img src="img/material-icon1.png" alt="icon"/> </div>
                    </div>
                    <div className="material-studybox mtbox2">
                      <div className="mtbox-head">
                        <h5>Previous Year</h5>
                        <p>Question Papers</p>
                      </div>
                      <div className="mt-box-img"> <img src="img/material-icon2.png" alt="icon"/> </div>
                    </div>
                    <div className="material-studybox mtbox3">
                      <div className="mtbox-head">
                        <h5>Previous Year</h5>
                        <p>Question Papers</p>
                      </div>
                      <div className="mt-box-img"> <img src="img/material-icon3.png" alt="icon"/> </div>
                    </div>
                    <div className="material-studybox mtbox4">
                      <div className="mtbox-head">
                        <h5>Previous Year</h5>
                        <p>Question Papers</p>
                      </div>
                      <div className="mt-box-img"> <img src="img/material-icon4.png" alt="icon"/> </div>
                    </div>
                    <div className="material-studybox mtbox1">
                      <div className="mtbox-head">
                        <h5>Previous Year</h5>
                        <p>Question Papers</p>
                      </div>
                      <div className="mt-box-img"> <img src="img/material-icon1.png" alt="icon"/> </div>
                    </div>
                    <div className="material-studybox mtbox2">
                      <div className="mtbox-head">
                        <h5>Previous Year</h5>
                        <p>Question Papers</p>
                      </div>
                      <div className="mt-box-img"> <img src="img/material-icon2.png" alt="icon"/> </div>
                    </div>
                    <div className="material-studybox mtbox3">
                      <div className="mtbox-head">
                        <h5>Previous Year</h5>
                        <p>Question Papers</p>
                      </div>
                      <div className="mt-box-img"> <img src="img/material-icon3.png" alt="icon"/> </div>
                    </div>
                    <div className="material-studybox mtbox4">
                      <div className="mtbox-head">
                        <h5>Previous Year</h5>
                        <p>Question Papers</p>
                      </div>
                      <div className="mt-box-img"> <img src="img/material-icon4.png" alt="icon"/> </div>
                    </div>
                  </div>
        
        
        </div>
        
      
        
        
        
       {/* <!-- Study material -->*/}
            
          </div>
         {/* <!-- / Content --> */}
          
        </div>
       {/* <!-- Content wrapper --> */}
        
      </div>
     {/* <!-- / Layout page -->*/ }
    </div>
    
    {/*<!-- Overlay -->*/}
    <div className="layout-overlay layout-menu-toggle"></div>
  </div>

    </div>
  );
}

export default App;
