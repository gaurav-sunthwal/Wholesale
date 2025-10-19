export const formatContent = (content: string) => {
  return content
    .split("\n")
    .map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1
            key={index}
            className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0"
          >
            {line.replace("# ", "")}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-semibold text-white mb-4 mt-6"
          >
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("1.")) {
        return (
          <p key={index} className="text-gray-300 mb-3 ml-4">
            {line}
          </p>
        );
      } else if (
        line.startsWith("- (a)") ||
        line.startsWith("- (b)") ||
        line.startsWith("- (c)") ||
        line.startsWith("- (d)") ||
        line.startsWith("- (e)") ||
        line.startsWith("- (f)") ||
        line.startsWith("- (g)")
      ) {
        return (
          <p key={index} className="text-gray-300 mb-2 ml-8">
            {line}
          </p>
        );
      } else if (line.trim() === "") {
        return <br key={index} />;
      } else if (line.trim()) {
        return (
          <p key={index} className="text-gray-200 mb-3">
            {line}
          </p>
        );
      }
      return null;
    })
    .filter(Boolean);
};
