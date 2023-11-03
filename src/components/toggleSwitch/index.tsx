import sunIcon from '/assets/icons/sun.svg';
import moonIcon from '/assets/icons/moon.svg';
import { useTheme } from '../../contexts/ui.context';

const ToggleSwitch = () => {
  const { themeMode, lightMode, darkMode } = useTheme();

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {themeMode === 'dark' ? (
        <button onClick={lightMode}>
          <img width="42px" src={sunIcon} className="fill-white" alt="sun icon" />
        </button>
      ) : (
        <button onClick={darkMode}>
          <img width="42px" src={moonIcon} alt="moon icon" />
        </button>
      )}
    </div>
  );
};

export default ToggleSwitch;
