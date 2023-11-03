const Footer = () => {
  return (
    <footer className="h-16 font-monument md:h-14 md:flex items-center justify-center bg-green-400 dark:bg-green-800">
      <p className="text-xs mt-2 md:mt-0 sticky bottom-0 text-green-700 dark:text-gray-200 bottom-0 text-center">
        © {new Date().getFullYear()}, Made with ❤️ by
      </p>
      <p className="font-alex ml-2 text-center text-4xl text-green-900 dark:text-green-200 font-bold tracking-wider">
        Prateek Saini
      </p>
    </footer>
  );
};

export default Footer;
