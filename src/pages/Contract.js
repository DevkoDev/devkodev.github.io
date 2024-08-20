import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Contract = () => {
  const { contractAddress, network } = useParams();
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    try {
      fetch(require(`../assets/contracts/${network}/${contractAddress}.sol`)).then(async (fileData) => {
        setFileContent(await fileData.text());
      });
    } catch (error) {
      console.log(error);
    }
  });

  if (network === "ethereum" || network === "polygon" || network === "base") {
    return (
      <div className="mt-5">
        <SyntaxHighlighter language="solidity" style={vscDarkPlus}>
          {fileContent}
        </SyntaxHighlighter>
      </div>
    );
  } else {
    return <div className="mt-5">wrong network</div>;
  }
};
export default Contract;
