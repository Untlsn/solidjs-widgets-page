const Footer = () => {
  return (
    <>
      <footer class="bg-blue-footer h-15 w-screen absolute bottom-0 flex items-center justify-center text-white">
        Copyright &copy; {new Date().getFullYear()} Filip Skoczeń. Build with SolidJs
      </footer>
      <hr class="h-15 w-screen"/>
    </>
  );
};

export default Footer;