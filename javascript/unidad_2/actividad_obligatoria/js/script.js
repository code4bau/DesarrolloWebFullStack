for (i = 11; i >= 9; i--) {
  document.write("<br><b>La tabla del " + i + ":</b><br>");
  for (j = 1; j <= 9 ; j++) {
    document.write(i + " x " + j + ": ");
    document.write(i * j);
    document.write("<br>");
  }
}
