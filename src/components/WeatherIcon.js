import { ReactComponent as Svg01d } from '../svg/01d.svg';
import { ReactComponent as Svg01n } from '../svg/01n.svg';
import { ReactComponent as Svg02d } from '../svg/02d.svg';
import { ReactComponent as Svg02n } from '../svg/02n.svg';
import { ReactComponent as Svg03d } from '../svg/03d.svg';
import { ReactComponent as Svg03n } from '../svg/03n.svg';
import { ReactComponent as Svg04d } from '../svg/04d.svg';
import { ReactComponent as Svg04n } from '../svg/04n.svg';
import { ReactComponent as Svg09d } from '../svg/09d.svg';
import { ReactComponent as Svg09n } from '../svg/09n.svg';
import { ReactComponent as Svg10d } from '../svg/10d.svg';
import { ReactComponent as Svg10n } from '../svg/10n.svg';
import { ReactComponent as Svg11d } from '../svg/11d.svg';
import { ReactComponent as Svg11n } from '../svg/11n.svg';
import { ReactComponent as Svg13d } from '../svg/13d.svg';
import { ReactComponent as Svg13n } from '../svg/13n.svg';
import { ReactComponent as Svg50d } from '../svg/50d.svg';
import { ReactComponent as Svg50n } from '../svg/50n.svg';

const WeatherIcon = ({ icon, size }) => {
  switch (icon) {
    case '01d':
      return <Svg01d />;
    case '01n':
      return <Svg01n />;
    case '02d':
      return <Svg02d />;
    case '02n':
      return <Svg02n />;
    case '03d':
      return <Svg03d />;
    case '03n':
      return <Svg03n />;
    case '04d':
      return <Svg04d />;
    case '04n':
      return <Svg04n />;
    case '09d':
      return <Svg09d />;
    case '09n':
      return <Svg09n />;
    case '10d':
      return <Svg10d />;
    case '10n':
      return <Svg10n />;
    case '11d':
      return <Svg11d />;
    case '11n':
      return <Svg11n />;
    case '13d':
      return <Svg13d />;
    case '13n':
      return <Svg13n />;
    case '50d':
      return <Svg50d />;
    case '50n':
      return <Svg50n />;
    default:
      return null;
  }
};

export default WeatherIcon;
