import React, { useState } from "react";

const Code = () => {
  const code = `
public class prime_Number {
    public static boolean isprime(int n) {
        boolean flg = true;
        for (int i = n - 1; i >= 2; i--) {
            if (n % i == 0) {
                flg = false;
                return flg;
            }
        }
        return flg;
    }

    public static void main(String[] args) {
        System.out.print("Input Range: ");
        java.util.Scanner sc = new java.util.Scanner(System.in);
        int input = sc.nextInt();
        sc.close();
        for (int i = 1; i <= input; i++) {
            if (isprime(i)) {
                System.out.print(i + " ");
            }
        }

    }
}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative bg-gray-800 text-white p-4 rounded-lg">
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        Java Code for prime Numnber
      </h3>
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default Code;
