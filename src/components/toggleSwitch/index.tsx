import { useContext } from 'react';
import { Types, ThemeContext } from '../../ThemeContext';
import sunIcon from '/assets/icons/sun.svg';
import moonIcon from '/assets/icons/moon.svg';

const ToggleSwitch = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const handler = (color: string) => dispatch({ type: color });

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {state.themeMode === 'dark' ? (
        <button onClick={() => handler(Types.Light)}>
          <img width="42px" src={sunIcon} className="fill-white" alt="sun icon" />
        </button>
      ) : (
        <button onClick={() => handler(Types.Dark)}>
          <img width="42px" src={moonIcon} alt="moon icon" />
        </button>
      )}
    </div>
  );
};

export default ToggleSwitch;
