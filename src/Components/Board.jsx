import Column from "./Column";

export default function Board() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Column day={"Monday"} />
        <Column day={"Tuesday"} />
        <Column day={"Wednesday"} />
        <Column day={"Thursday"} />
        <Column day={"Friday"} />
      </div>
    </div>
  );
}
