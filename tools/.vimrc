set guifont=Lucida_Console:h12
set ruler
set ts=2
set sw=2
set smartindent
set backspace=indent,eol,start

cd ~/Desktop
cd %:p:h

inoremap {<CR> {<CR><BS>}<Esc>O
imap <C-BS> <C-W>
syntax enable

autocmd BufNewFile *.cpp 0r ~/.vim/templates/skeleton.cpp
autocmd filetype cpp nnoremap <C-N> :w <bar> !g++ -g -std=c++14 % -o %:r -Wl,--stack,268435456 && %:r<CR>
" Go to C:\MinGW\bin and run mingw-get.exe install gdb
autocmd filetype cpp nnoremap <C-H> :w <bar> !gdb %:r<CR>
set number
augroup numbertoggle
    autocmd!
    autocmd BufEnter,FocusGained,InsertLeave * set relativenumber
    autocmd BufLeave,FocusLost,InsertEnter * set norelativenumber
augroup END
