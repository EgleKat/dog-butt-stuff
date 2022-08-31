
import Image from "next/image";
export default function ButtGallery({ images = [] }) {
  function createButtImage({ id, width = 300, height = 400 }) {
    console.log(id, width, height)
    return <Image
      {...
      {
        key: id,
        src: `https://i.imgur.com/${id}.jpeg`,
        // layout: "responsive",
        width,
        height,
      }
      }
    />
  }

  const processedEntries = []
  images.forEach(entry => {
    if (entry.is_album) {
      entry.images.forEach(image => {
        processedEntries.push(createButtImage(image))
      })
    }
    else processedEntries.push(createButtImage(entry))
  })

  console.log(images)
  return (
    <div>
      {processedEntries}
    </div>
  );
}