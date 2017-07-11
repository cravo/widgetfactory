'use strict';

var gui_region = { X: 0, Y: 0, W: SCREEN_W, H: SCREEN_H };
var gui_locator = { X: 0, Y: 0 };
var gui_mouse_x = 0;
var gui_mouse_y = 0;
var gui_mouse_b = 0;
var gui_col_primary = makecol(255, 255, 0);
var gui_col_inactive = makecol(128, 128, 0);
var gui_col_background = makecol(0, 0, 64);
var gui_elem_h = 20;

var gui_result = { None: 0, Hover: 1, Click: 2 };

function GUI_Begin()
{
    gui_region = { X: 0, Y: 0, W: SCREEN_W, H: SCREEN_H };
    gui_locator = { X: 0, Y: 0 };
    gui_mouse_x = mouse_x;
    gui_mouse_y = mouse_y;
    gui_mouse_b = mouse_pressed;
}

function GUI_SetRegion(x, y, w, h)
{
    gui_region.X = x;
    gui_region.Y = y;
    gui_region.W = w;
    gui_region.H = h;

    gui_locator.X = x;
    gui_locator.Y = y;
}

function GUI_MouseOver(x, y, w, h)
{
    return gui_mouse_x >= x && gui_mouse_x < x + w && gui_mouse_y >= y && gui_mouse_y < y + h;
}

function GUI_ButtonCommon(txt, col)
{
    var x = gui_locator.X;
    var y = gui_locator.Y;
    var w = gui_region.W;
    var h = gui_elem_h;

    var mouseOver = GUI_MouseOver(x, y, w, h);

    rect(canvas, x, y, w, h, col);

    if (mouseOver)
    {
        rectfill(canvas, x + 2, y + 2, w - 4, h - 4, col);
    }

    if (mouseOver && gui_mouse_b)
    {
        x += 2;
        y += 2;
    }

    if (mouseOver)
    {
        textout_centre(canvas, font, txt, x + (w / 2), y + h - 4, h * 0.8, gui_col_background);
    }
    else
    {
        textout_centre(canvas, font, txt, x + (w / 2), y + h - 4, h * 0.8, col);
    }

    GUI_MoveLocator();

    var result = gui_result.None;
    if (mouseOver)
    {
        result = gui_result.Hover;
        if (gui_mouse_b)
        {
            result = gui_result.Click;
        }
    }

    return result;
}

function GUI_Progress(proportion, colour)
{
    var x = gui_locator.X;
    var y = gui_locator.Y;
    var w = gui_region.W;
    var h = gui_elem_h;

    var mouseOver = GUI_MouseOver(x, y, w, h);

    rectfill(canvas, x, y, w * proportion, h, colour);

    var result = gui_result.None;
    if (mouseOver)
    {
        result = gui_result.Hover;
    }

    return result;
}

function GUI_Button(txt)
{
    return GUI_ButtonCommon(txt, gui_col_primary);
}

function GUI_ButtonInactive(txt)
{
    return GUI_ButtonCommon(txt, gui_col_inactive);
}

function GUI_Text(txt)
{
    textout(canvas, font, txt, gui_locator.X, gui_locator.Y + gui_elem_h - 4, gui_elem_h * 0.8, gui_col_primary);
    GUI_MoveLocator();
}

function GUI_Window(title)
{
    rect(canvas, gui_locator.X, gui_locator.Y, gui_region.W, gui_region.H, gui_col_primary);
    rectfill(canvas, gui_locator.X, gui_locator.Y, gui_region.W, gui_elem_h, gui_col_primary);
    textout(canvas, font, title, gui_locator.X + 4, gui_locator.Y + gui_elem_h - 4, gui_elem_h * 0.8, gui_col_background);
    GUI_SetRegion(gui_locator.X + 4, gui_locator.Y + gui_elem_h + 4, gui_region.W - 8, gui_region.H - gui_elem_h - 8);
}

function GUI_MoveLocator()
{
    gui_locator.Y += gui_elem_h + 4;
}