export default function IsOpen({ isOpen }) {
  const wordToImage = (isOpen) => {
    switch (isOpen) {
      case "Y":
        return <strong className="Open">เปิดอยู่</strong>;
      case "N":
        return <strong className="Closed">ปิดแล้ว</strong>;
      default:
    }
  };

  return (
    <div className="ShopStatus">
      <div>{wordToImage(isOpen)}</div>
    </div>
  );
}
