const Challenge = ({ data }) => {
  console.log(data);
  return <h1>Challenge</h1>;
};

export const getServerSideProps = async () => {
  const data = await (
    await fetch(`https://billions-api.nomadcoders.workers.dev`)
  ).json();

  return {
    props: {
      data: data.slice(0, 31),
    },
  };
};

export default Challenge;

//https://codesandbox.io/s/nextjs-blueprint-forked-b2utkr?file=/pages/index.js
