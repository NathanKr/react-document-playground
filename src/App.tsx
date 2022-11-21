import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(document.getElementById("kkk")?.querySelectorAll("li").length);
  });
  const data =
    "<ul id='kkk'><li id='id1'>1111111111111</li><li id='id2'>222222222222</li><li id='id3'>33333333333</li><li id='id4'>4444444444</li></ul>";

  return (
    <div
      onClick={(e) => {
        console.log(
          ((e.target as HTMLElement))
            .id
        );
      }}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}

export default App;
