;define functions
(defun palindrome-checker (str) 
  (equal str (reverse str)))


(defun read-strings (filename)
  (with-open-file (stream filename)
    (loop for line = (read-line stream nil)
          while line
          collect (string-right-trim '(#\return #\newline) line))))


(defun convert-boolean (bool)
  (if (equal bool "false") nil t))


(defun test-checker (string soln)
  (equal (palindrome-checker string) soln))


                            
(defvar *tests*) ;define global variables
(defvar *solns*)
(setf *tests* (read-strings "C:/GitHub/Association-Of-Practical-Programming/problems/1_palindrome/input.txt")) ; read files
(setf *solns* (mapcar #'convert-boolean (read-strings "C:/GitHub/Association-Of-Practical-Programming/problems/1_palindrome/output.txt")))


(format t "~{~a ~}" (mapcar #'test-checker *tests* *solns*)) ;output results







