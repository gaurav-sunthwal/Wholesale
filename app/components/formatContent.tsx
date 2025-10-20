export const formatContent = (content: string) => {
  // Formatting rules array
  const formattingRules = [
    {
      condition: (line: string) => line.startsWith("# "),
      component: (line: string, index: number) => (
        <h1
          key={index}
          className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0"
        >
          {line.replace("# ", "")}
        </h1>
      )
    },
    {
      condition: (line: string) => line.startsWith("## "),
      component: (line: string, index: number) => (
        <h2
          key={index}
          className="text-2xl font-semibold text-white mb-4 mt-6"
        >
          {line.replace("## ", "")}
        </h2>
      )
    },
    {
      condition: (line: string) => line.startsWith("1."),
      component: (line: string, index: number) => (
        <p key={index} className="text-gray-300 mb-3 ml-4">
          {line}
        </p>
      )
    },
    {
      condition: (line: string) => 
        line.startsWith("- (a)") ||
        line.startsWith("- (b)") ||
        line.startsWith("- (c)") ||
        line.startsWith("- (d)") ||
        line.startsWith("- (e)") ||
        line.startsWith("- (f)") ||
        line.startsWith("- (g)"),
      component: (line: string, index: number) => (
        <p key={index} className="text-gray-300 mb-2 ml-8">
          {line}
        </p>
      )
    },
    {
      condition: (line: string) => line.trim() === "",
      component: (line: string, index: number) => <br key={index} />
    },
    {
      condition: (line: string) => line.trim() !== "",
      component: (line: string, index: number) => (
        <p key={index} className="text-gray-200 mb-3">
          {line}
        </p>
      )
    }
  ];

  return content
    .split("\n")
    .map((line, index) => {
      // Find the first matching rule
      const matchingRule = formattingRules.find(rule => rule.condition(line));
      
      if (matchingRule) {
        return matchingRule.component(line, index);
      }
      
      return null;
    })
    .filter(Boolean);
};
