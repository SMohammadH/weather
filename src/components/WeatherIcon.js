import {
  WiCloudy,
  WiDayCloudy,
  WiDayCloudyHigh,
  WiDayLightWind,
  WiDayRain,
  WiDayShowers,
  WiDaySnowThunderstorm,
  WiDaySunny,
  WiNightAltCloudy,
  WiNightAltThunderstorm,
  WiNightClear,
  WiNightPartlyCloudy,
  WiNightRain,
  WiNightShowers,
  WiStrongWind,
} from 'react-icons/wi';

const WeatherIcon = ({ icon, size }) => {
  switch (icon) {
    case '01d':
      return <WiDaySunny size={size} />;
    case '01n':
      return <WiNightClear size={size} />;
    case '02d':
      return <WiDayCloudy size={size} />;
    case '02n':
      return <WiNightPartlyCloudy size={size} />;
    case '03d':
      return <WiDayCloudyHigh size={size} />;
    case '03n':
      return <WiNightAltCloudy size={size} />;
    case '04d':
      return <WiCloudy size={size} />;
    case '04n':
      return <WiCloudy size={size} />;
    case '09d':
      return <WiDayShowers size={size} />;
    case '09n':
      return <WiNightShowers size={size} />;
    case '10d':
      return <WiDayRain size={size} />;
    case '10n':
      return <WiNightRain size={size} />;
    case '11d':
      return <WiDaySnowThunderstorm size={size} />;
    case '11n':
      return <WiNightAltThunderstorm size={size} />;
    case '50d':
      return <WiDayLightWind size={size} />;
    case '50n':
      return <WiStrongWind />;
    default:
      return null;
  }
};

export default WeatherIcon;
