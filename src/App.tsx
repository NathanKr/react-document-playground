import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(document.getElementById("kkk")?.querySelectorAll("li").length);
  });
  const data =
    "<ul id='kkk'><li>1111111111111</li><li>222222222222</li><li>33333333333</li><li>4444444444</li></ul>";

  return (
    <div
      onClick={(e) => {
        console.log(
          ((e.target as HTMLElement).nextElementSibling as HTMLElement)
            .innerText
        );
      }}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}

export default App;
