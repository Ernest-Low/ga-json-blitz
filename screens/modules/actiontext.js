//  Text control for bottom left box

const $actionText = (inputtext) => {
  let $text = $("<h4>")
    .attr("id", "actiontext")
    .css({
      color: "ghostwhite",
      "font-family": "Alagard",
      "font-size": "2rem",
      "word-wrap": "break-word",
    })
    .text("");

  const typewriter = (text) => {
    const textarray = [];
    textarray.push(text);
    let textPosition = 0;
    //  1000ms = 1s, length / (time to render)
    const speed = Math.floor(1000 / (textarray[0].length / 2));
    console.log(textarray);
    const innertypewriter = () => {
      $("#actiontext").text(textarray[0].substring(0, textPosition));
      if (textPosition++ != textarray[0].length) {
        setTimeout(innertypewriter, speed);
      }
    };
    innertypewriter();
  };

  typewriter(inputtext);

  return $text;
};

export default $actionText;
