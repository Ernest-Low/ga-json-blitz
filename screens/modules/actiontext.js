//  Typewriter text control

const $actionText = (inputtext, time, window = $("#actiontext")) => {
  //  Text input
    const textarray = [];
    textarray.push(inputtext);
    let textPosition = 0;
    //  1000ms = 1s, length / (time to render)
    const speed = Math.floor(1000 / (textarray[0].length / time));

    //  Inner rewriting text
    const innertypewriter = () => {
      window.text(textarray[0].substring(0, textPosition));
      if (textPosition++ != textarray[0].length) {
        setTimeout(innertypewriter, speed);
      }
    };

    innertypewriter();
};

export default $actionText;
