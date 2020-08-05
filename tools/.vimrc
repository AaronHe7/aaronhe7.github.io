set guifont=Lucida_Console:h12
set ruler
set ts=2
set sw=2
set smartindent
set backspace=indent,eol,start

"" enter fullscreen
au GUIEnter * simalt ~x

cd ~/Desktop
cd %:p:h

inoremap {<CR> {<CR><BS>}<Esc>O
imap <C-BS> <C-W>
syntax enable

""normal template
autocmd BufNewFile *.cpp 0r ~/.vim/templates/skeleton.cpp

""google code jam template
""autocmd BufNewFile *.cpp 0r ~/.vim/templates/gcj.cpp

""usaco template
""autocmd BufNewFile *.cpp 0r ~/.vim/templates/usaco.cpp

autocmd filetype cpp nnoremap <F9> :w <bar> !g++ -g -std=c++14 % -o %:r -Wl,--stack,268435456<CR>
autocmd filetype py nnoremap <F9> :w <bar> !python %:r<CR>
autocmd filetype cpp nnoremap <F10> :!%:r <CR>
autocmd filetype java nnoremap <F9> :w <bar> !java %:r<CR>
" Go to C:\MinGW\bin and run mingw-get.exe install gdb
autocmd filetype cpp nnoremap <F11> :w <bar> !gdb %:r<CR>

set number
augroup numbertoggle
    autocmd!
    autocmd BufEnter,FocusGained,InsertLeave * set relativenumber
    autocmd BufLeave,FocusLost,InsertEnter * set norelativenumber
augroup END
