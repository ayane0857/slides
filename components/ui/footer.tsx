import React from "react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 mt-auto bg-[#F9F6F7]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              License
            </Button>
          </a>
          <a
            href="https://ayane0857.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Homepage
            </Button>
          </a>
        </div>
        <p className="text-center text-gray-600 text-sm">
          © 2025 彩音. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
