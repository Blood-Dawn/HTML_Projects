$(document).ready(function () {
    let currentPlayer = "X"
    let board = Array(9).fill(null)
  
    $(".cell").click(function () {
      const cellIndex = $(this).data("cell")
      if (!board[cellIndex]) {
        board[cellIndex] = currentPlayer
  
        // jQuery: Set cell's content based on the current player
        $(this).html(
          currentPlayer === "X"
            ? `<img src="pumpkin.png" alt="Pumpkin" class="icon">`
            : `<img src="turkey.png" alt="Turkey" class="icon">`,
        )
  
        if (checkWin()) {
          $("#message").text(
            currentPlayer === "X"
              ? "The Pumpkin harvests a win!"
              : "The Turkey triumphs!",
          )
          $(".cell").off("click") // Prevent further clicks after a win
        } else if (board.every((cell) => cell)) {
          $("#message").text("It's a Thanksgiving tie!")
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X"
          $("#message").text(
            currentPlayer === "X" ? "Pumpkin's turn!" : "Turkey's turn!",
          )
        }
      }
    })
  
    $("#resetButton").click(function () {
      board.fill(null)
      $(".cell").empty()
      currentPlayer = "X"
      $("#message").text("Let the Thanksgiving game begin!")
      $(".cell").on("click", function () {
        const cellIndex = $(this).data("cell")
        if (!board[cellIndex]) {
          board[cellIndex] = currentPlayer
          $(this).html(
            currentPlayer === "X"
              ? `<img src="pumpkin.png" alt="Pumpkin" class="icon">`
              : `<img src="turkey.png" alt="Turkey" class="icon">`,
          )
          if (checkWin()) {
            $("#message").text(
              currentPlayer === "X"
                ? "The Pumpkin harvests a win!"
                : "The Turkey triumphs!",
            )
            $(".cell").off("click")
          } else if (board.every((cell) => cell)) {
            $("#message").text("It's a Thanksgiving tie!")
          } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X"
            $("#message").text(
              currentPlayer === "X" ? "Pumpkin's turn!" : "Turkey's turn!",
            )
          }
        }
      })
    })
  
    function checkWin() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      return winPatterns.some((pattern) => {
        const [a, b, c] = pattern
        return board[a] && board[a] === board[b] && board[a] === board[c]
      })
    }
  })
  