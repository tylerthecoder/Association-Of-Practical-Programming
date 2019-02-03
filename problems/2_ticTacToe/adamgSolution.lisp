(defun get-directions (size position)
  (let ((res nil) (res2 nil))
    (when (>= (floor position size) 2) (push (- size) res))
    (when (<= (mod position size) (- size 3)) (push 1 res))
    (when (<= (floor position size) (- size 3)) (push size res))
    (when (>= (mod   position size) 2) (push -1 res))
    (when (>= (list-length res) 2)
      (loop for i from 0 to (- (list-length res) 1)
            do (push (+ (nth i res) (nth (mod (+ i 1) (list-length res)) res)) res2)) )
    (append res res2)))


(defun check-directions (board pos directions)
  (loop for d in directions
        do (when (char= (char board pos) (char board (+ pos d)) (char board (+ pos (* 2 d)))) (return-from check-directions (char board pos)))))


(defun check-winner (board)
  (remove-duplicates (remove nil (loop for i from 0 to (- (length board) 1)
                                       collect (check-directions board i (get-directions (floor (sqrt (length board))) i))))))

(defun print-winners (winners)
  (format t "~{~a~}~%" (if winners winners (list "Tie"))))

(defun main ()
  (with-open-file (stream "input.txt")
    (loop for line = (read-line stream nil)
          while line
          do (print-winners (check-winner (string-right-trim '(#\Return #\Newline) line))))))