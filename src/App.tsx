const App = () => {
  return (
    <div className="modal-container">
      <div className="modal-overlay">
        <div className="modal-content">
          <h1>Modal title</h1>
          <p>
            Below is a static modal example (meaning its position and display
            have been overridden). Included are the modal header, modal body
            (required for padding), and modal footer (optional). We ask that you
            include modal headers with dismiss actions whenever possible, or
            provide another explicit dismiss action.
          </p>

          <div className="modal-button">
            <button className="button-62" type="button" role="button">
              Đồng Ý
            </button>
          </div>

          <div className="spesial">
            <svg width="100%" height="100%" viewBox="0 0 200 200">
              <use
                x="0"
                y="0"
                transform="scale(0.5) rotate(40)"
                xlinkHref="#light"
              />
              <use
                x="150"
                y="-790"
                transform="scale(0.2) rotate(90)"
                xlinkHref="#light"
              />
              <use
                x="0"
                y="200"
                transform="scale(0.35) rotate(-45)"
                xlinkHref="#light"
              />
              <use
                x="-240"
                y="390"
                transform="scale(0.5) rotate(-70)"
                xlinkHref="#light"
              />
              <use
                x="300"
                y="-90"
                transform="scale(0.4) rotate(90)"
                xlinkHref="#light"
              />
            </svg>
          </div>
        </div>
      </div>

      <svg
        className="test"
        width="100px"
        height="100px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            fill="#9900ff"
            stroke="#9900ff"
            id="light"
            d="m 0,0 c 6.24111,-8.9445 10.61204,-23.77912 17.97353,-53.80856 l 29.7995,-5.55584 35.35534,41.92133 c -1.95372,12.45653 45.89675,34.80534 61.61931,34.34518 -17.63651,5.49982 -9.56977,24.91725 2.52538,36.87057 C 139.10793,46.26094 131.45087,39.06432 122.46831,22.22336 118.45247,16.48431 87.40919,-0.96167 83.63345,0.73967 c -9.2424,4.06941 -3.52888,14.963 -1.51523,18.60117 -4.31715,4.656 -7.89706,8.06774 -8.43836,13.6677 0.0873,-12.34933 1.5179,-42.45863 -5.49456,-26.14667 L 65.95578,-14.91769 C 61.11992,-21.99984 48.27857,-50.5446 47.89033,-37.93673 46.10689,-46.50735 39.22534,-49.00909 35.6512,-48.25273 17.657,-46.88454 17.9011,-38.9303 16.45831,-31.58521 7.76504,-6.22367 6.56293,-8.29891 0,0 Z"
          />
        </defs>
      </svg>
    </div>
  );
};

export default App;
