import ToggleSwitch from '../toggleSwitch';
import githubMark from '/assets/icons/github-mark.svg';
import githubMarkWhite from '/assets/icons/github-mark-white.svg';
import { useTheme } from '../../contexts/ui.context';

const Header = () => {
  const { themeMode } = useTheme();
  let githubIcon = themeMode === 'dark' ? githubMarkWhite : githubMark;

  return (
    <header className="h-16 z-10 font-monument fixed w-full bg-green-400 dark:bg-green-900 flex items-center justify-center">
      <div className="absolute left-0 ml-2">
        <a href="https://www.github.com/prateek1998" target="_blank">
          <img width="42px" src={githubIcon} className="logo" alt="github profile" />
        </a>
      </div>
      <h2 className="text-xl uppercase md:text-3xl dark:text-green-200 tracking-wide">
        Learn Array
      </h2>
      <div className="absolute right-0 mr-2">
        <ToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
