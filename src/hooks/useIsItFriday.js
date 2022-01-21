import { useState, useEffect } from "react";

export default function () {
  const today = new Date();
  const day = today.getDay();

  return day === 5;
}
