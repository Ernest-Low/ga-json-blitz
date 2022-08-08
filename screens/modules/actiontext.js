//  Text control for bottom left box

const $actionText = () => {
  let inputtext =
    "Hello World this is a very generic sentence with the goal of trying to add as many words as possible that the text is forced to wrap, letting me test it. The quick brown fox jumps over the lazy dog.";

  let $text = $("<h4>")
    .attr("id", "actiontext")
    .attr("style", "--n:53")
    .css({
      color: "ghostwhite",
      "font-family": "Alagard",
      "font-size": "1rem",
      "word-wrap": "break-word",
    })
    .text(inputtext);

  return $text;
};

export default $actionText;
