import "./Header.css"

interface IHeaderProps {

}

const Header: React.FunctionComponent<IHeaderProps> = () => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">React Typescript Tutorial</a>
    </div>
</nav>
);

export default Header;
