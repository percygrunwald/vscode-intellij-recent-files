import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('extension.intellijRecentFiles', async () => {
		const navigate = vscode.workspace.getConfiguration().get('intellijRecentFiles.navigate');

		await vscode.commands.executeCommand("workbench.action.quickOpen");

		return vscode.commands.executeCommand(navigate ? 'workbench.action.quickOpenNavigateNext' : 'workbench.action.quickOpenSelectNext');
	});

	context.subscriptions.push(disposable);
}
