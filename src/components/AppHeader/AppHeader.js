import {
  AppBar,
  Toolbar,
  Box,
} from "@mui/material";

const AppHeader = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* Pulled the Upgrade logo SVG from the marketing site */}
          <svg xmlns="http://www.w3.org/2000/svg" width="171" height="40" viewBox="0 0 189 42">
            <g clipPath="url(#clip0_124_31023)">
              <path d="M57.1673 12.7334V23.7077C57.1673 26.6431 54.7503 29.0236 51.7699 29.0236C48.7895 29.0236 46.3725 26.6431 46.3725 23.7077V12.7334H42.3018V23.5441C42.3018 28.6937 46.5413 32.8692 51.7699 32.8692C56.9986 32.8692 61.2381 28.6937 61.2381 23.5441V12.7334H57.1673Z" fill="#0e680e"></path>
              <path d="M18.9726 0.0439453V25.5876C18.9726 32.0234 13.6765 37.2395 7.14197 37.2395C6.29563 37.2395 5.47265 37.15 4.67822 36.9838C7.70793 40.0751 11.9578 42.0005 16.6647 42.0005C25.868 42.0005 33.3268 34.6519 33.3268 25.5902V0.0439453H18.9726Z" fill="#4a9d2d"></path>
              <path d="M7.14202 32.6574C3.19587 32.6574 0 29.5072 0 25.6207V4.56445H14.2866V25.6207C14.2866 29.5072 11.0882 32.6574 7.14202 32.6574Z" fill="#0e680e"></path>
              <path d="M84.8864 22.4903C84.8864 28.6627 80.2549 32.7896 75.0652 32.7896C72.0718 32.7896 69.5977 31.7668 67.879 29.9974V39.2612H63.7278V12.7408H67.879V14.9806C69.5951 13.2112 72.0692 12.1885 75.0652 12.1885C80.2549 12.1885 84.8864 16.3563 84.8864 22.4878M80.8546 22.4878C80.8546 18.3992 78.0196 15.804 74.3876 15.804C71.1138 15.804 67.8816 18.3992 67.8816 22.4878C67.8816 26.5763 71.1138 29.1716 74.3876 29.1716C78.0196 29.1716 80.8546 26.6172 80.8546 22.4878Z" fill="#0e680e"></path>
              <path d="M123.374 12.6618L123.094 16.5944C122.775 16.556 122.297 16.556 121.936 16.556C116.907 16.556 114.431 20.0155 114.431 25.3621V32.2427H110.279V12.7411H114.431V16.9089C116.027 14.3136 118.543 12.5059 121.975 12.5059C122.455 12.5059 122.853 12.5059 123.372 12.6644" fill="#0e680e"></path>
              <path d="M144.556 32.2406H140.405V30.0007C138.689 31.7701 136.212 32.7929 133.219 32.7929C128.029 32.7929 123.4 28.666 123.4 22.4936C123.4 16.3212 128.029 12.1943 133.219 12.1943C136.212 12.1943 138.689 13.2171 140.405 14.9865V12.7466H144.556V32.2406ZM140.405 22.4911C140.405 18.4025 137.173 15.8073 133.899 15.8073C130.267 15.8073 127.432 18.4025 127.432 22.4911C127.432 26.5796 130.267 29.1749 133.899 29.1749C137.173 29.1749 140.405 26.6205 140.405 22.4911Z" fill="#0e680e"></path>
              <path d="M184.301 26.6661C182.902 28.7449 180.908 29.2537 178.943 29.2537C176.03 29.2537 173.353 27.0906 172.956 23.4751H189.003V22.0586C188.803 16.2007 184.413 12.1914 179.104 12.1914C173.514 12.1914 168.844 16.3183 168.844 22.5316C168.844 28.7449 173.553 32.7925 178.943 32.7925C183.33 32.7925 186.843 30.7495 188.481 26.6661H184.304H184.301ZM179.101 15.8095C181.814 15.8095 184.091 17.382 184.729 20.5653H173.073C173.711 17.4203 176.505 15.8095 179.101 15.8095Z" fill="#0e680e"></path>
              <path d="M163.181 0V14.4185C161.385 13.1017 159.126 12.3602 156.686 12.3602C150.881 12.3602 146.143 16.5024 146.143 22.5802C146.143 28.658 150.881 32.8385 156.686 32.8385C162.491 32.8385 166.953 28.8855 167.208 23.0788H167.221V0H163.181ZM156.686 29.2844C153.251 29.2844 150.169 26.6406 150.169 22.5776C150.169 18.5147 153.248 15.8708 156.686 15.8708C160.123 15.8708 163.163 18.5147 163.163 22.5776C163.163 26.6406 160.043 29.2844 156.686 29.2844Z" fill="#0e680e"></path>
              <path d="M103.618 12.7408V14.9806C101.902 13.2112 99.4249 12.1885 96.4316 12.1885C91.2419 12.1885 86.6129 16.3563 86.6129 22.4878C86.6129 28.6193 91.2445 32.787 96.4316 32.787C99.4249 32.787 101.902 31.7643 103.618 29.9949V30.473C103.618 34.0885 101.263 37.1747 97.509 37.1747C93.7549 37.1747 92.3842 35.6329 90.907 33.3521L87.7163 35.4335C89.3129 38.3432 91.7247 40.872 97.509 40.872C103.696 40.872 107.769 36.2363 107.769 30.5548V12.7408H103.618ZM97.1118 29.1741C93.4797 29.1741 90.6447 26.6197 90.6447 22.4903C90.6447 18.3609 93.4797 15.8065 97.1118 15.8065C100.386 15.8065 103.618 18.4018 103.618 22.4903C103.618 26.5788 100.383 29.1741 97.1118 29.1741Z" fill="#0e680e"></path>
            </g>
          </svg>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
