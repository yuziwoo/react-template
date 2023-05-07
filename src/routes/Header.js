import "../css/Header.module.css";

function Header(props) {
  let store = props.store;
  let gnb = [
    {
      navigate: -1,
      name: "👈🏻"
    },
    {
      navigate: "/",
      name: "To Main"
    },
    {
      navigate: "/content1",
      name: "To Content1"
    }];

  return (
    <header>
      {
        gnb.map((v, i) => {
          return (
            <p key={i} onClick={() => {
              props.navigate(v.navigate);
              props.resetJW(`/${document.URL.split("/")[3].trim()}`);
            }} className={v.navigate == store.jwState ? "active" : null}>
              { v.name }
            </p>
          )
        })
      }
    </header>
  )
}

export default Header;