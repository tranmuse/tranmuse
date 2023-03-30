function PinterestBoard() {
  return (
    <div
      className="pinterest-board"
      data-pin-board-width="900"
      data-pin-scale-height="700"
      data-pin-scale-width="200"
    >
      <a
        data-pin-do="embedBoard"
        href="https://www.pinterest.com/tranmuse/kalimba-tabs/"
      ></a>
      <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
    </div>
  );
}

export default PinterestBoard;
