import React from "react";
import Image from "next/image";

export default function DemocracySection() {
  return (
    <div className="hero flex min-h-dvh items-center justify-center overflow-clip bg-neutral-950 py-12 text-white">
      <div className="hero-content flex-col gap-6 lg:flex-row lg:gap-12">
        <div className="relative">
          <Image
            className="h-120 rounded-lg object-cover shadow-2xl"
            src="/assets/painting-democracy.jpg"
            height={600}
            width={400}
            alt="Democracy painting"
          />

          {/* Circular text overlay */}
          <div className="absolute -right-4 bottom-4 flex h-32 w-32 animate-spin items-center justify-center rounded-full bg-neutral-950 shadow-lg [animation-duration:_20s]">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <path
                id="circlePath"
                fill="none"
                d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              />
              <text fill="#f4f4f4" fontSize="11">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  REDEFINE GOVERNANCE | REGAIN DEMOCRACY |
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div>
          <p className="max-w-2xl py-6 text-2xl lg:text-3xl">
            Build States based on Ideals, Values and Belief.{" "}
            <span className="opacity-40">Not Territory.</span>
          </p>
          <a href="https://x.com/AimStates" className="btn btn-primary">
            Get notified on launch
          </a>
        </div>
      </div>
    </div>
  );
}
