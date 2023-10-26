import { useContext } from 'react';
import ToggleSwitch from '../toggleSwitch';
import { ThemeContext } from '../../ThemeContext';
import githubMark from '/assets/icons/github-mark.svg';
import githubMarkWhite from '/assets/icons/github-mark-white.svg';

const Header = () => {
  const { state } = useContext(ThemeContext);
  let githubIcon = state.themeMode === 'light' ? githubMarkWhite : githubMark;

  return (
    <header className="h-16 font-monument fixed w-full bg-green-900 dark:bg-orange-800 flex items-center justify-center">
      <div className="absolute left-0 ml-2">
        <a href="https://www.github.com/prateek1998" target="_blank">
          <img width="42px" src={githubIcon} className="logo" alt="github profile" />
        </a>
      </div>
      <h2 className="text-xl uppercase md:text-3xl text-green-200 tracking-wide dark:text-orange-200 ">
        Learn Array
      </h2>
      <div className="absolute right-0 mr-2">
        <ToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
